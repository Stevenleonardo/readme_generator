
// Require all npm packages and files
 const fs = require("fs");
 const axios = require("axios");
 const inquirer = require('inquirer');
 const generate = require("./utils/generateMarkdown");
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
    .then(function (answers) {
        const queryUrl = `https://api.github.com/users/${answers.username}`;
        axios.get(queryUrl).then(function(response){
            response.data.html_url = answers.html_url
            response.data.avatar_url = answers.avatar_url
            fs.writeFile('read.md', generate(answers), function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
            
        })

    })
    
}

init();
