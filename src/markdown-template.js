// // create the project title section
// const generatePage = titleText => {
//   if (!titleText) {
//     return '';
//   }

//   // //description on project
//     return `
//       #${data.titleText}#
//       ##${data.descInfo}
//     `;
// };



// //create table of contents array to pageReadm

// const generatePage = readmeArr => {
// //     //string to generate the table of contents   
//  return`
//   # 'Project Title: ${readmeArr} ${title}
//   concole.log(title)
  


//   ##Table-Of-Contents
    
//   # 'Description' ${readmeArr} ${descInfo}]

//   [#${instalIns}]
//   [#${usageInfo}]
//   [#${contrGui}]
//   [#${testIns}]
//   [#${license}]
    
//   ##[Installation]#Table-Of-Contents
//   [${installInsnput}]

//   ##[Usage]#Table-Of-Contents
//   [${usageInfoInput}]

//   ##[Testing-Instructions]#Table-Of-Contents
//   [${testInsInput}]
//     `;
//   };    
    
module.exports = templateData => {
  const { title, descinfo, installIns, usageInfo, testIns, license, github, email} = templateData;
return `

#${title}

 
${descinfo}

----------------------------------

## Table of Contents

- [Installation](#installation) 

- [Usage Information](#usage-information)

- [License Information](#license-information)

- [Testing Instructions](#testing-instructions)

- [Contribute](#contribute)

- [Questions](#questions)

-----------------------------------

# Installation 

${installIns}

# Usage Information

${usageInfo}

# License Information 

${license}

# Contribute: 

If you'd like to make a contribution to this project, please reach out via email.  Thank you for your interest in this project.

# Testing Instructions

### ${testIns}

# Questions 

Should you have any questions, please feel free to reach out to me.  I can be reached via email at: ${email}

My GitHub profile is: https://github.com/${github}





`;
};


  
  
// function renderLicenseBadge(license) {}


  // export function to generate entire page
  // module.exports = generatePage
    // destructure page data by section
    //const { title, descinfo, ...license } = generateMarkdown;
    //  return "Helllo Hackensack"

  