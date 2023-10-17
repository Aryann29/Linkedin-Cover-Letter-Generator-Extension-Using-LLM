# Cover Letter Creator

The Cover Letter Creator is a web application that leverages the power of the OpenAI Language Model (LLM) to generate personalized cover letters for LinkedIn job postings using Langchain. This project consists of a Flask-based backend and a user-friendly HTML/JavaScript front-end.

## Features

- **Job Details Retrieval**: The application allows you to input a LinkedIn job posting URL. It fetches the job title, company name, and job description from the provided URL.

- **Cover Letter Generation**: After retrieving job details, you can generate a customized cover letter by providing the role, company, job description, and uploading your resume in PDF format. The cover letter is created based on this information, making it easy to apply for job opportunities with a tailored cover letter.

## How to Use

1. Open the application using a web browser.
2. In the "Input" section:
   - Enter the job role in the "Role" field.
   - Enter the company name in the "Company" field.
   - Provide the job description in the "Description" field.
   - Upload your resume in PDF format using the "Upload Resume" button.
3. Click "Fill Job Info" to automatically fill in job details by providing the LinkedIn job posting URL.
4. Click "Generate Letter" to generate a cover letter based on the provided information.
5. The generated cover letter will be displayed in the "Output" section.
6. You can go back to the input page using the "Back" button if needed.

## Technologies Used

- **Flask**: The backend of the application is built using the Flask web framework.

- **LangChain**: NLP framework to analyze job details and resume to create cover letter content.

- **OpenAI GPT-3.5**: The OpenAI Language Model is used for generating the cover letter content.

- **HTML and JavaScript**: The front-end user interface is developed using HTML and JavaScript for a user-friendly experience.

## Setting up the Project

1. Clone the project from the GitHub repository or just download gen-cover-ui if you dont have open ai api key.
2. Install the required Python libraries using `pip install -r requirements.txt`.
3. Set up the OpenAI API key as an environment variable named `OPENAI_API_KEY`.
4. Run the Flask application using `python your_app_name.py`.

## Screenshots

Here are the screenshots of the application:
- **Step 1: Open Linkedin Job Post in Background and Open the Extension**
-   ![step1](https://github.com/Aryann29/Linkedin-Cover-Letter-Generator-Extension-Using-LLM/assets/63531062/93592997-66bd-4a0b-949b-6b59bdb4d8d1)

  
- **Step 2: Input Job Details or Fill Job Info**
![step2](https://github.com/Aryann29/Linkedin-Cover-Letter-Generator-Extension-Using-LLM/assets/63531062/977b2024-97fa-4211-b28e-f6194f720881)


- **Step 3: Upload Your Resume**  
![step3](https://github.com/Aryann29/Linkedin-Cover-Letter-Generator-Extension-Using-LLM/assets/63531062/a85e5a17-204c-448f-8d38-35e94f1cbb06)

- **Step 4: Click on Generate Letter button to Generate Cover Letter**
 ![step4](https://github.com/Aryann29/Linkedin-Cover-Letter-Generator-Extension-Using-LLM/assets/63531062/6e57dbed-1c7a-4b69-be51-2e3cad3c1469)

- **Step 5: View Generated Cover Letter**
![step5](https://github.com/Aryann29/Linkedin-Cover-Letter-Generator-Extension-Using-LLM/assets/63531062/9cc58426-d321-43b7-b61e-4ca3239f387b)

## Acknowledgments

This project is made possible by the integration of OpenAI's language model and various web technologies. The code provided here serves as a foundation for creating a cover letter generation tool for LinkedIn job postings.

## Future Improvements

- Implement user authentication to save generated cover letters.
- Enhance the user interface with more interactive features.
- Add error handling and validation for inputs.
- Optimize the application for better performance and speed.

Feel free to contribute to this project and make it even more powerful and user-friendly!
