// Dependancies Needed for Application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Make sure that promises are returned
const writeFileAsync = util.promisify(fs.writeFile);

// Promt User for information about their GitHub username and the project which requires the README.md
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHubUsername?"
        },
        {
            type: "input",
            name: "projectTitle",
            message: "What is the name of your Project?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of your project."
        },
        {
            type: "input",
            name: "installation",
            message: "How should this application be installed for use?"
        },
        {
            type: "input",
            name: "usage",
            message: "What will this project be used for?"
        },
        {
            type: "input",
            name: "license",
            message: "What licenses are required to run this application?"
        },
        {
            type: "input",
            name: "conributing",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "How can this application be tested?"
        },
        {
            type: "input",
            name: "emailQuestions",
            message: "What is your GitHub email address?"
        }
    ]);
}

// Build README using answers from promptUser
function generateMarkdown(answers) {
    return `
    # Project title
    https://img.shields.io/badge/README.md-Generator-orange
    ${answers.projectTitle} 
 
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

async function init() {
    console.log("Let's begin!")
    try {
        const answers = await promptUser();

        const markdown = generateMarkdown(answers);

        await writeFileAsync("README.md", markdown);

        console.log("Successfully generated README.md file!");
    } catch (err) {
        console.log(err);
    }
}

init();

