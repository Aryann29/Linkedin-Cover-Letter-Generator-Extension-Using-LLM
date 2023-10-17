from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup
import openai
import PyPDF2
import io
import json
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

openai.api_key = os.environ.get('OPENAI_API_KEY')

@app.route('/job_details/<job_id>', methods=['GET'])
def get_job_details(job_id):
    url = f"https://www.linkedin.com/jobs/view/{job_id}/"
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser")
        title = soup.find("h1", class_="topcard__title")
        company = soup.find("a", class_="topcard__org-name-link")
        description = soup.find("div", class_="description__text description__text--rich")
        description_text = description.text.split("Show more")[0]

        job_details = {
            "Role": title.text.strip(),
            "Company": company.text.strip(),
            "Description": description_text.strip()
        }

        return jsonify(job_details), 200
    else:
        error_message = {"error": f"Unable to access the URL. Status code: {response.status_code}"}
        return jsonify(error_message), 500

@app.route('/coverletter', methods=['POST'])
def generate_cover_letter():
    data = request.get_json()
    role = data['role']
    company = data['company']
    description = data['description']
    resume = data['pdf_text']
    

   
    
    prompt = f"""Dear Hiring Manager,
  Write a concise cover letter expressing your interest in the {role} position at {company} based on the provided job description: {description}. Incorporate relevant information from the attached resume {resume} to demonstrate your suitability for the role. Keep the letter brief but impactful, focusing on why you are the perfect fit for this opportunity."""

    response = openai.Completion.create(
        engine="text-davinci-003", 
        prompt=prompt,
        max_tokens=500,
        n=1,
        stop=None,
        temperature=0.7,
    )
    res = { 'coverLetter': response.choices[0].text,}

    return  res,200

def clean_pdf_text(pdf_text):
    cleaned_text = pdf_text.replace('\n', ' ').strip()
    cleaned_text = cleaned_text.replace('', '- ')  
    return cleaned_text

@app.route('/pdf', methods=['POST'])
def handle_pdf():
    pdf_file = request.files['pdf']

    if not pdf_file:
        return "PDF file is required", 400

    pdf_binary_data = pdf_file.read()
    pdf_reader = PyPDF2.PdfReader(io.BytesIO(pdf_binary_data))
    pdf_text = ""

    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        pdf_text += page.extract_text()

    cleaned_pdf_text = clean_pdf_text(pdf_text)

    response = {'message': 'Received and processed the PDF file successfully', 'pdf_text': cleaned_pdf_text}
    return jsonify(response)


if __name__ == '__main__':
    app.run()
