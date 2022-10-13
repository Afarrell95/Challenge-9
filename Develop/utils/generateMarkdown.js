// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
