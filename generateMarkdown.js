function generateMarkdown(answers) {
  return `
# ${answers.projectTitle}
  https://img.shields.io/badge/README.md-Generator-orange
    
 
## Table of Contents
 * [Description](#Description)
 * [Installation](#Installation)
 * [Usage](#Usage)
 * [License](#License)
 * [Contributing](#Contributing)
 * [Tests](#Tests)
 * [Questions](#Questions)
    
 ## Description
 ${answers.description}

 ## Installation
 ${answers.installation}

 ## Usage
 ${answers.usage}

 ## License
 ${answers.license}

 ## Contributing
 ${answers.contributing}

 ## Tests
    ${answers.tests}

 ## Questions
    ![GitHub Profile Pic](https://avatars.githubusercontent.com/${answers.username})
      
    
 ## Email
    ${answers.emailQuestions}
      
`;
}

module.exports = generateMarkdown;
