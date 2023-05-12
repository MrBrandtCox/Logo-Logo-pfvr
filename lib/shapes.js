// Shape class containing function to create shape properties
class Shape {
    constructor() {
        this.color = ''                     
        this.textColor = ''
        this.text = ''
    }
    setColor(color) {
        this.color = color
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
    setText(text) {
        this.text = text
    }

}

// Triangle class to extend the shape properties and render them with svg and triangle styling
class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width='300' height='200' viewBox='0 0 300 200' xmlns="http://www.w3.org/2000/svg"> 
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="150" y="125" text-anchor='middle' fill='${this.textColor}'
        >${this.text}</text></svg>`
    }
}

// Circle class to extend the shape properties and render them with svg and circle styling
class Circle extends Shape {
    render() {
        return `<svg version="1.1" width='300' height='200' viewBox='0 0 300 200' xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="75" fill="${this.color}" stroke-width="5"/><text x="150" y="110" text-anchor='middle' fill='${this.textColor}'
        >${this.text}</text></svg>`
    }
}

// Square class to extend the shape properties and render them with svg and square styling
class Square extends Shape {
    render() {
        return `<svg version="1.1" width='300' height='200' viewBox='0 0 300 200' xmlns="http://www.w3.org/2000/svg"> 
        <rect x="85" y="50" rx="0" ry="0" width="125" height="125" fill="${this.color}" stroke-width="5"/><text x="150" y="150" text-anchor='middle' fill='${this.textColor}'
        >${this.text}</text></svg>`
    }
}

// Exporting the shapes to index.js
module.exports = { Triangle, Circle, Square }