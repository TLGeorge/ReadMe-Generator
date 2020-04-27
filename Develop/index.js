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
            message: "What is the name of your project/Repo?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of your project."
        },
        {
            type: "input",
            name: "installation",
            message: ""
        },
        {
            type: "input",
            name: "usage",
            message: "What will this project be used for? How should it be used?"
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
        },
    ])
}

// Build README using answers from promptUser
function generateMarkdown(data) {
    return `
    # Project title
    https://img.shields.io/badge/README.md-Generator-orange
    ${data.projectTitle} 
 
    ## Table of Contents
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)
    
    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    ![GitHub Profile Pic](https://avatars.githubusercontent.com/${data.username})
      
    
    ## Email
    ${data.emailQuestions}
    
    `;
}

function init() {
    promptUser()
        .then(function (answers) {
            const markdown = generateMarkdown(answers);
            return writeFileAsync("README.md", markdown);
        })
    then(function () {
        console.log("Successfully completed README.md file!");
    })
        .catch(function (err) {
            console.log(err);
        });
};

init();
