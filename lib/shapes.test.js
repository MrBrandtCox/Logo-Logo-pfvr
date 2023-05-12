// Importing the shape data to run the test
const { Triangle, Circle, Square } = require('./shapes.js');

// Data to run the test for the Triangle logo
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        shape.setTextColor('green');
        shape.setText('SAM')
        expect(shape.render()).toEqual(`<svg version="1.1" width='300' height='200' viewBox='0 0 300 200' xmlns="http://www.w3.org/2000/svg"> 
        <polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="125" text-anchor='middle' fill='green'
        >SAM</text></svg>`);
    })
})

// Data to run the test for the Circle logo
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        shape.setColor('green');
        shape.setTextColor('blue');
        shape.setText('SAM')
        expect(shape.render()).toEqual(`<svg version="1.1" width='300' height='200' viewBox='0 0 300 200' xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="75" fill="green" stroke-width="5"/><text x="150" y="110" text-anchor='middle' fill='blue'
        >SAM</text></svg>`);
    })
})

// Data to run the test for the Square logo
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        shape.setColor('yellow');
        shape.setTextColor('green');
        shape.setText('SAM')
        expect(shape.render()).toEqual(`<svg version="1.1" width='300' height='200' viewBox='0 0 300 200' xmlns="http://www.w3.org/2000/svg"> 
        <rect x="85" y="50" rx="0" ry="0" width="125" height="125" fill="yellow" stroke-width="5"/><text x="150" y="150" text-anchor='middle' fill='green'
        >SAM</text></svg>`);
    })
})
