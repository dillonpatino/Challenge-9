// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// If no license is chosen on the termial prompt, this function will return an empty string, otherwise it will return the respective badge.
function renderLicenseBadge(license) {
    if (license.length === 0) {
        return ""
    }  else if (license == "Apache") {
        return `[![Licenses: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }  else if (license == "BSD") {
        return `[![License: BSD](https://img.shields.io/badge/License-BSD-2.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    }  else if (license == "ISC") {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }  else if (license == "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// If no license is chosen on the terminal prompt, this function will return an empty string, otherwise it will return the link to the corresponding license.
function renderLicenseLink(license) {
    if (license.length === 0) {
        return ""
    } else if (license == 'Apache') {
        return `https://opensource.org/licenses/Apache-2.0`
    } else if (license == 'BSD') {
        return `https://opensource.org/licenses/BSD-2-Clause`
    } else if (license == 'ISC') {
        return `https://opensource.org/licenses/ISC`
    } else if (license == 'MIT') {
        return `https://opensource.org/licenses/MIT`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// This function takes the previous two functions and will call them together when a license is chosen on the terminal prompt, if nothing is chosen it will return an empty string.
function renderLicenseSection(license) {
    if (license.length === 0) {
    return ""
  } else {
    return `## License ${renderLicenseBadge(license)} ${renderLicenseLink(license)} `
  }
}

// TODO: Create a function to generate markdown for README
// This function takes the answers from the questions array and generate the markdown.
function generateMarkdown(answer) {
    



    let readmeText = "";
    readmeText += `${renderLicenseBadge(answer.License)}`
    const title = answer.Title;
    readmeText += `# ${title}\n` 
    
    
    const description = answer.Description;
    readmeText += `---\n`
    readmeText += `${description}\n`

    const installation = answer.Installation;
    readmeText += `---\n`
    readmeText += `${installation}\n`

    const usage = answer.Usage;
    readmeText += `---\n`
    readmeText += `${usage}\n`

    const contribution = answer.Contributions;
    readmeText += `---\n`
    readmeText += `${contribution}\n`

    const test = answer.Tests;
    readmeText += `---\n`
    readmeText += `${test}\n`
  return readmeText

}

module.exports = generateMarkdown;
