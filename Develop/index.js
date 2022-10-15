// TODO: Include packages needed for this application
const generateMkdwn = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const prompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Description of your project",
        name: "description",
      },
      {
        type: "input",
        message: "Provide Table of Contents",
        name: "table of contents",
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
        message: "Questions?",
        name: "questions",
      },
    ])
    .then((data) => {
      console.log(data);
      return data;
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeContent = generateMarkdown(data);

  fs.writeFile("README.md", readmeContent, (err) =>
    err ? console.log(err) : console.log("Successfully created README!")
  );
}

// TODO: Create a function to initialize app
const init = () => {
  prompt()
    .then(() => writeToFile())
    .then(() => console.log("Successfully created README!"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
