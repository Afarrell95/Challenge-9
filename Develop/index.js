// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const makeReadMe = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Title",
    name: "title",
  },
  {
    type: "input",
    message: "Description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Provide installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide usage of project",
    name: "usage",
  },
  {
    type: "list",
    message: "Provide license type",
    name: "license",
    choices: ["MIT", "GPL", "GNU", "LGPL", "Apache", "BSD"],
  },
  {
    type: "input",
    message: "Any contributors?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Provide test instructions",
    name: "tests",
  },
  {
    type: "input",
    message: "GitHub Account",
    name: "questionsGithub",
  },
  {
    type: "input",
    message: "Email Account",
    name: "questionsEmail",
  },
];

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions).then((data) => {
    const readmeContent = makeReadMe.generateMarkdown(data);
    fs.writeFile("README.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README!")
    );
  });
};

// Function call to initialize app
init();
