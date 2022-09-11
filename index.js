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
