// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    ("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
  } else if (license === "GPL") {
    ("[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)");
  } else if (license === "GNU") {
    ("[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)");
  } else if (license === "LGPL") {
    ("[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)");
  } else if (license === "Apache") {
    ("[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
  } else if (license === "BSD") {
    ("[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)");
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
  } else if (license === "GPL") {
  } else if (license === "GNU") {
  } else if (license === "LGPL") {
  } else if (license === "Apache") {
  } else if (license === "BSD") {
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
  } else if (license === "GPL") {
  } else if (license === "GNU") {
  } else if (license === "LGPL") {
  } else if (license === "Apache") {
  } else if (license === "BSD") {
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  -(#description)
  -(#installation)
  -(#usage)
  -(#license)
  -(#contributing)
  -(#tests)
  -(#questions)

  ## description
  ${data.description}
  ## installation
  ${data.installation}
  ## usage
  ${data.usage}
  ## license
  ${data.license}
  ## contributing
  ${data.contributing}
  ## tests
  ${data.tests}
  ## questions
  ${data.questions}
`;
}

module.exports = "./generateMarkdown";
