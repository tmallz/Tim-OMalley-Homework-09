// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path")
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a shot description of your project: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'list',
        name: 'command',
        message: 'What command should be run to install dependencies?',
        choices: ['npm i', 'choice 2', 'choice 3', 'ect...']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What commnd should be run to ren tests?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'repoInfo',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributionInfo',
        message: 'What does the user need to know about contributing to the repo? '
    },

];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {writeToFile('README.md', generateMarkdown)})
}

// Function call to initialize app
init();
