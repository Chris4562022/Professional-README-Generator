// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();





const inquirer = require('inquirer');
const generatePage = require('./src/markdown-template');
const fd = require('fs');
const { writeFile } = require('./utils/generateMarkdown');


const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your projects title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'descinfo',
        message: 'Please provide a sort description of your project explaining the what, why, and how your project was created. (Required)',
        validate: descinfoInput => {
          if (descinfoInput) {
            return true;
          } else {
            console.log('Please provide a description of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installIns',
        message: 'Please enter your installation instructions. (Required)',
        validate: installInsInput => {
          if (installInsInput) {
            return true;
          } else {
            console.log('Please the installation instructions for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usageInfo',
        message: 'Please provide some usage information regarding your project. (Required)',
        validate: usageInfoInput => {
          if (usageInfoInput) {
            return true;
          } else {
            console.log('Please provide some usage infomration for your project!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select which liscense that you have used for your project.',
        choices: ['mit', 'isc', 'No-License'],
        validate: licenseInput => {
          if (licenseInput.data === 'No-License')
          return [];
          if (licenseInput.data === 'isc')
          return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)]'
        }
      },
      {
        type: 'input',
        name: 'testIns',
        message: 'Please provide testing instructions for your project. (Required)',
        validate: testInsInput => {
          if (testInsInput) {
            return true;
          } else {
            console.log('Please provide some testing instructions for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username. (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your github username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address. (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      }
    ]);
};
  
//   const promptProject = portfolioData => {
//     console.log(`
//   =================
//   Add a New Project
//   =================
//   `);
  
//     // If there's no 'projects' array property, create one
//     if (!portfolioData.projects) {
//       portfolioData.projects = [];
//     }
//     return inquirer
//       .prompt([
//         {
//           type: 'input',
//           name: 'name',
//           message: 'What is the name of your project? (Required)',
//           validate: nameInput => {
//             if (nameInput) {
//               return true;
//             } else {
//               console.log('You need to enter a project name!');
//               return false;
//             }
//           }
//         },
//         {
//           type: 'input',
//           name: 'description',
//           message: 'Provide a description of the project (Required)',
//           validate: descriptionInput => {
//             if (descriptionInput) {
//               return true;
//             } else {
//               console.log('You need to enter a project description!');
//               return false;
//             }
//           }
//         },
//         {
//           type: 'checkbox',
//           name: 'languages',
//           message: 'What did you this project with? (Check all that apply)',
//           choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//         },
//         {
//           type: 'input',
//           name: 'link',
//           message: 'Enter the GitHub link to your project. (Required)',
//           validate: linkInput => {
//             if (linkInput) {
//               return true;
//             } else {
//               console.log('You need to enter a project GitHub link!');
//               return false;
//             }
//           }
//         },
//         {
//           type: 'confirm',
//           name: 'feature',
//           message: 'Would you like to feature this project?',
//           default: false
//         },
//         {
//           type: 'confirm',
//           name: 'confirmAddProject',
//           message: 'Would you like to enter another project?',
//           default: false
//         }
//       ])
//       .then(projectData => {
//         portfolioData.projects.push(projectData);
//         if (projectData.confirmAddProject) {
//           return promptProject(portfolioData);
//         } else {
//           return portfolioData;
//         }
//       });


promptUser()

.then(readmeData => {

    // console.log(readmeData);
return generatePage(readmeData);
})
.then( pageReadme => {
return writeFile(pageReadme);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
  
})

.catch(err => {
  console.log(err);
});