// TODO: Include packages needed for this application
const generateMkdwn = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
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
]);
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
//       err ? console.log(err) : console.log("Success!")
//     );
//   });

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
