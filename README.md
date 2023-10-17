# Cover Letter Creator

The Cover Letter Creator is a web application that leverages the power of the OpenAI Language Model (LLM) to generate personalized cover letters for LinkedIn job postings. This project consists of a Flask-based backend and a user-friendly HTML/JavaScript front-end.

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

- **OpenAI GPT-3.5**: The OpenAI Language Model is used for generating the cover letter content.

- **HTML and JavaScript**: The front-end user interface is developed using HTML and JavaScript for a user-friendly experience.

## Setting up the Project

1. Clone the project from the GitHub repository or just download gen-cover-ui if you dont have open ai api key.
2. Install the required Python libraries using `pip install -r requirements.txt`.
3. Set up the OpenAI API key as an environment variable named `OPENAI_API_KEY`.
4. Run the Flask application using `python your_app_name.py`.

## Screenshots

Here are the screenshots of the application:

- **Step 1: Input Job Details**
  ![Input Page](steps\step1.png)

- **Step 2: Fill Job Info**
  ![Fill Job Info](steps\step1.png)

- **Step 3: Generate Cover Letter**
  ![Generate Letter](steps\step1.png)

- **Step 4: View Generated Cover Letter**
  ![Cover Letter Output](steps\step1.png)

## Acknowledgments

This project is made possible by the integration of OpenAI's language model and various web technologies. The code provided here serves as a foundation for creating a cover letter generation tool for LinkedIn job postings.

## Future Improvements

- Implement user authentication to save generated cover letters.
- Enhance the user interface with more interactive features.
- Add error handling and validation for inputs.
- Optimize the application for better performance and speed.

Feel free to contribute to this project and make it even more powerful and user-friendly!