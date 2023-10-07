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
        name: "shapeColor",
        message: "Please enter the shape color (name or hex code):",
        validate: requiredField
    }
];

function generateShapeSVG(shape, shapeColor) {
    return new (
        shape === "Circle" ? Circle :
        shape === "Square" ? Square :
                             Triangle
    )().setColor(shapeColor).render();
}

function generateTextSVG(text, textColor) {
    return `<text x='150' y='100' fill='${textColor}' text-anchor='middle' dominant-baseline='middle'>${text}</text>`;
}

function generateSVG(text, textColor, shape, shapeColor) {
    return `<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    ${generateShapeSVG(shape, shapeColor)}
    ${generateTextSVG(text, textColor)}
</svg>`;
}

function writeToFile(logo) {
    fs.writeFile(
        "logo.svg",
        logo,
        (error) => {
            console.log(
                error ?
                `\n\x1b[91mError writing to file: ${error}\x1b[0m` :
                "\n\x1b[93mGenerated logo.svg\x1b[0m"
            );
        }
    );
}

function init() {
    console.log("Welcome to SVG Logo Maker!\n");
    console.log("Please answer the questions below to make your logo.\n\n")

    inquirer
        .prompt(questions)
        .then((response) => {
            let { text, textColor, shape, shapeColor } = response;
            writeToFile(generateSVG(text, textColor, shape, shapeColor));
        });
}

init();
