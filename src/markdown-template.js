
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

    
module.exports = templateData => {
  const { title, descinfo, installIns, usageInfo, testIns, license, github, email, licenseInput} = templateData;

// // TODO: Create a function that returns a license badge based on which license is passed in

// // If there is no license, return an empty string
// function renderLicenseBadge(license) 

  function renderLicenseBadge(license) { 
    if (license !== 'No-License') {
      return `
    ![badge](https://img.shields.io/badge/license-${license}-green)
      `;
    } else {
      return ' ';
    }
  }
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

  function renderLicenseLink(license) {
    if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';

    }
  }


  function renderLicenseSection(license) {
    if (!license === 'No-License') {
    return `
    ## [License-Information](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
   }

   

return `

# ${title}

 
${descinfo}




----------------------------------

# Table of Contents

- [Installation](#installation) 

- [Usage Information](#usage-information)

- [License Information](#license)
${renderLicenseBadge(license)}

- [Testing Instructions](#testing-instructions)

- [Contribute](#contribute)

- [Questions](#questions)

-----------------------------------

# Installation 

${installIns}

# Usage Information

${usageInfo}

# License 



${license}

${renderLicenseSection(license)}


For more information on this license, please visit: www.choosealicense.com/licenses/${license}/

# Contribute: 

If you'd like to make a contribution to this project, please reach out via email.  Thank you for your interest in this project.

# Testing Instructions

### ${testIns}

# Questions 

Should you have any questions, please feel free to reach out to me.  I can be reached via email at: ${email}

My GitHub profile is: https://github.com/${github}





`;
};

  