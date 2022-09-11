// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license.length === 0) {
        return ""
    }  else if (license == "ISC") {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
    let readmeText = "";
    const title = answer.Title;
    readmeText += `# ${title}\n` 

    const description = answer.Description;
    readmeText += `---\n`
    readmeText += `${description}\n`
  return readmeText

}

module.exports = generateMarkdown;
