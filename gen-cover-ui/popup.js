const createButton = document.getElementById('create-button');
const backButton = document.getElementById('back-button');
const inputSlide = document.getElementById('input-slide');
const outputSlide = document.getElementById('output-slide');
const coverLetterContainer = document.getElementById('cover-letter');
const roleInput = document.getElementById('roleInput');
const companyInput = document.getElementById('companyInput');
const descriptionInput = document.getElementById('descriptionInput');
const fillJobIdButton = document.getElementById('fill-job-id-button');
const loadingSpinner = document.getElementById('loading-spinner');

outputSlide.style.display = 'none';
loadingSpinner.style.display = 'none';

async function generateCoverLetter(role, company, description) {
  
  const apiUrl = 'https://llm-cover-aryann29.vercel.app/coverletter'; 

  const requestData = {
    role: role,
    company: company,
    description: description,
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const coverLetterText = data.coverLetter;


    const formattedCoverLetter = coverLetterText.replace(/\n/g, '<br>');


    return formattedCoverLetter;
  } catch (error) {
    // console.error('Error:', error);
    return 'An error occurred while generating the cover letter.';
  }
}


function extractJobIDFromLinkedInURL(url) {
  const match = url.match(/[?&]currentJobId=(\d+)/);

  if (match) {
    return match[1];
  }


  const pathMatch = url.match(/jobs\/view\/(\d+)/);
  if (pathMatch) {
    return pathMatch[1];
  }

 
  const pathMatch2 = url.match(/jobs\/(\d+)/);
  if (pathMatch2) {
    return pathMatch2[1];
  }

  
  return 'default';
}

fillJobIdButton.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    // console.log(url);
    var jobID = extractJobIDFromLinkedInURL(url);
    // console.log(jobID);


    const api_url = `https://llm-cover-aryann29.vercel.app/job_details/${jobID}`;

    fetch(api_url)
      .then((response) => {
        
        return response.json();
      })
      .then((data) => {
        const role = data.Role;
        const company = data.Company;
        const description = data.Description;

        roleInput.value = role;
        companyInput.value = company;
        descriptionInput.value = description;
      })
      .catch((error) => {
        // console.error('Error:', error);
      });
  });
});

createButton.addEventListener('click', async () => {
  const role = roleInput.value;
  const company = companyInput.value;
  const description = descriptionInput.value;
  const resumeInput = document.getElementById('resumeInput');

  if (resumeInput.files.length === 0) {
    alert('Please select a PDF file for your resume.');
    return;
  }

  // Show the loading spinner before making any requests
  loadingSpinner.style.display = 'flex';

  const formData = new FormData();
  formData.append('role', role);
  formData.append('company', company);
  formData.append('description', description);
  formData.append('pdf', resumeInput.files[0]); 

  try {
    
    const pdfResponse = await fetch('https://llm-cover-aryann29.vercel.app/pdf', {
      method: 'POST',
      body: formData,
    });
    
    if (!pdfResponse.ok) {
      throw new Error(`PDF extraction request failed with status ${pdfResponse.status}`);
    }

    const pdfData = await pdfResponse.json();


    const pdfText = pdfData.pdf_text;

   
    const coverLetterApiUrl = 'https://llm-cover-aryann29.vercel.app/coverletter';

    const coverLetterRequestData = {
      role: role,
      company: company,
      description: description,
      pdf_text: pdfText,
    };
    // console.log(coverLetterRequestData)

    const response = await fetch(coverLetterApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coverLetterRequestData),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const coverLetterText = data.coverLetter;
    // console.log(coverLetterText);


    const formattedCoverLetter = coverLetterText.replace(/\n/g, '<br>');

 
    coverLetterContainer.innerHTML = formattedCoverLetter;
    

    inputSlide.style.display = 'none';
    outputSlide.style.display = 'block';
    backButton.style.display = 'block';
    loadingSpinner.style.display = 'none';
  } catch (error) {
    
    loadingSpinner.style.display = 'none';
    return 'An error occurred while generating the cover letter.';
  }
});

backButton.addEventListener('click', () => {
  inputSlide.style.display = 'block';
  outputSlide.style.display = 'none';
  backButton.style.display = 'none';
});


