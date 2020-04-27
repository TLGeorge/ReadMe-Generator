const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHubUsername?"
    },
    // {
    //     type: "input",
    //     name: "email",
    //     message: "What is your GitHub email address?"
    // },
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
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
