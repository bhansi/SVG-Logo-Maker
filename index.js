const { Circle, Square, Triangle } = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

const textValidate = (input) => {
    return (input.length > 0 && input.length < 4) ? true : "Please enter up to 3 characters.";
};

const requiredField = (input) => input ? true : "This field is required.";

const shapes = [
    "Circle",
    "Square",
    "Triangle"
];

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter the logo text:",
        validate: textValidate
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter the text color (name or hex code):",
        validate: requiredField
    },
    {
        type: "list",
        name: "shape",
        message: "Please select the desired logo shape:",
        choices: shapes
    },
    {
        type: "input",
        name: "fill",
        message: "Please enter the shape color (name or hex code):",
        validate: requiredField
    }
];

function writeToFile(logo) {
    fs.writeFile(
        "logo.svg",
        logo,
        (error) => error ? console.log("\x1b[91m%s\x1b[0m", "Error writing to file: " + error) : console.log("\x1b[93m%s\x1b[0m", "Generated logo.svg")
    );
}

inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile(new (
            response.shape === "Circle" ? Circle :
            response.shape === "Square" ? Square :
                                          Triangle
            )(response.text, response.textColor, response.fill).render()
        );
    });
