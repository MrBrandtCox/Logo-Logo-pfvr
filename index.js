//Variables to import inquirer, shapes, and fs
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require('./lib/shapes.js');
const fs = require('fs');

// An array of questions for user input
const questions = [{
    type: 'input',
    message:'Enter up to three characters',
    name:'Text'
}, {
    type: 'input',
    message:'Enter a text color, or a hexadecimal number',
    name:'TextColor'
}, {
    type: 'list',
    message:'Choose a shape from the list',
    name:'Shape',
    choices: ['Triangle', 'Circle', 'Square']
}, {
    type: 'input',
    message:'Enter a shape color, or a hexadecimal number',
    name:'ShapeColor'
}];
// Function to create the logo
function writeToFile(filename, data) {

    fs.writeFile(filename, data, error => {
        if (error) {
           return console.log(error)
        } else {
            console.log('Generated logo.svg')
        }
    });
};
// Function to initialize the app

function init() {
   return inquirer.prompt(questions) 
    .then((data) => {
        console.log(data.ShapeColor)
        let userShape 
    if ('Triangle' === data.Shape) {
        userShape = new Triangle
    } else if ('Circle' === data.Shape) {
        userShape = new Circle
    } else {
        userShape = new Square
    } userShape.setColor(data.ShapeColor)
    userShape.setTextColor(data.TextColor)
    userShape.setText(data.Text)
    console.log(userShape)
    return writeToFile('logo.svg', userShape.render());
   
});
};

init();
