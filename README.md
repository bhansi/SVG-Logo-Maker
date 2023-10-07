# SVG-Logo-Maker

## Description

This program makes simple logo generation easy.<br>
The user provides input on text preferences and shape preferences and the program outputs an SVG logo based on those parameters.

## Table of Contents

[Installation](#installation)<br>
[Usage](#usage)<br>
[Testing](#testing)<br>
[Questions](#questions)

## Installation

Follow the following steps to install this program on a local machine:<br>
    1. Open a terminal on a local machine<br>
    2. Make/change directories to the directory in which the repository will be cloned<br>
    3. Clone this repository<br>
    4. Run "npm install" to install the required dependancies and packages

## Usage

Run either "npm start" or "node index.js" in the terminal to start the program, then answer all the prompts to generate a "logo.svg" file containing the desired logo.<br><br>

The following [video](https://drive.google.com/file/d/1gkNck1TnL4WdtPYfpHaJ5OI_bhuES54i/view) demonstrates how to use the program, where to find the outputted file, and how to view the file's contents.<br><br>

Three [example outputs](./examples/) of this program have been provided.<br><br>

Please reference the [following](https://www.w3.org/TR/SVG11/types.html#ColorKeywords) for a list of the recognized color keyword names for svg files.

## Testing

The Jest package comes as a dependancy. Once installed, simply type "npm run test" in the terminal and the program will run the [predefined test cases](./lib/shapes.test.js) to verify that the shapes are generated correctly.

## Questions

[GitHub](https://github.com/bhansi)<br>
If you have any questions, you can reach me via my [email](mailto:baljotshansi@gmail.com).
