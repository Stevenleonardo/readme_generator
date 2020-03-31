
// Require all npm packages and files
 const fs = require("fs");
 const util = require("util");
 const axio = require("axios");
 var inquirer = require('inquirer');

function init() {
    inquirer
    .prompt([
        {   
            type: "input",
            message: "What is your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "Project title",
            name: "title"
        },
        {
            type: "input",
            message: "Project Description",
            name: "description"
        },
        {
            type: "input",
            message: "installations needed",
            name: "installations"
        },
        {
            type: "input",
            message: "Usage",
            name: "usage"
        },
        {  type: "input",
            message: "License",
            name: "license"

        },
        {  type: "input",
            message: "Contributing",
            name: "contributing"

        },
        {  type: "input",
            message: "Test",
            name: "test"

        },
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
    })
}

init();
