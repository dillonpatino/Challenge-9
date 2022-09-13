// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Input the Title of your project",
        validate: Input => {
            if (Input) { 
        return true;
        } else {
            console.log("Enter your project's title"); 
            return false; 
        }
        }
    },
    {
        type: "input",
        name: "Description",
        message: "Enter a description of your project",
        validate: Input => {
            if (Input) { 
        return true;
        } else {
            console.log("Please enter your project's description!"); 
            return false; 
        }
        }
    },
    {
        type: "input",
        name: "Installation",
        message: "Enter any installation instructions.",
    },
    {
        type: "input",
        name: "Usage",
        message: "How would a client use this project/application?",
    },
    {
        type: "input",
        name: "Contributions",
        message: "Enter any/all contributing guidelines for this project.",
    },
    {
        type: "input",
        name: "Tests",
        message: "Which tests are included in this project?",
    },
    {
        type: "checkbox",
        name: "License",
        message: "Enter any licenses used on this project.",
        choices: ['Apache', 'BSD', 'ISC', 'MIT'],
        validate: licenselength => {
            if (licenselength.length <= 1) {
                return true;
            } else {
                return "Select a license.";
            }
        }
    },
    {
        type: "input",
        name: "GitHub",
        message: "Enter your GitHub username.",
    },
    {
        type: "input",
        name: "Email",
        message: "Enter your email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./README.md", generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        

    writeToFile(answer);
    });
}

// Function call to initialize app
init();
