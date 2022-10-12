// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "Description of your project",
      name: "description",
    },
    {
      type: "input",
      message: "",
      name: "table of contents",
    },
    {
      type: "input",
      message: "",
      name: "installation",
    },
    {
      type: "input",
      message: "",
      name: "usage",
    },
    {
      type: "input",
      message: "",
      name: "license",
    },
    {
      type: "input",
      message: "",
      name: "contributing",
    },
    {
      type: "input",
      message: "",
      name: "tests",
    },
    {
      type: "input",
      message: "",
      name: "questions",
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeContent = generateMarkdown(data);

  fs.writeFile("README.md", readmeContent, (err) =>
    err ? console.log(err) : console.log("Successfully created README!")
  );
}

// TODO: Create a function to initialize app
const init = () => {};

// Function call to initialize app
init();
