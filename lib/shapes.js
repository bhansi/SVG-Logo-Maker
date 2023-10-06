class Shape {
    constructor(fill, fontFamily, textColor, text) {
        this.fill = fill;
        this.fontFamily = fontFamily;
        this.textColor = textColor;
        this.text = text;
    }

    getTextProperties() {
        return `x='150' y='100' fill='${this.textColor}' font-family='${this.fontFamily}' text-anchor='middle' dominant-baseline='middle'`;
    }

    render() {
        return "<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>";
    }
}

class Circle extends Shape {
    constructor(fill, textColor, text) {
        super(fill, fontFamily, textColor, text);
    }

    render() {
        return super.render() + `
    <circle cx='150' cy='100' r='30' fill='${this.fill}' />
    <text ${this.getTextProperties()}>${this.text}</text>
</svg>
`;
    }
}

class Square extends Shape {
    constructor(fill, textColor, text) {
        super(fill, fontFamily, textColor, text);
    }

    render() {
        return super.render() + `
    <rect x='125' y='75' width='50' height='50' fill='${this.fill}' />
    <text ${this.getTextProperties()}>${this.text}</text>
</svg>
`;
    }
}

class Triangle extends Shape {
    constructor(fill, textColor, text) {
        super(fill, fontFamily, textColor, text);
    }

    // Get points to make equilateral triangle
    getPoints() {
        // Center of triangle
        let x0 = 150;
        let y0 = 100;

        let H = 50; // 2/3 of triangle height
        let h = H/2; // 1/3 of triangle height
        let half_l = Math.round((Math.sqrt(3) * H) / 2); // Half side length

        let point1 = `${x0}, ${y0 - H}`; // Top middle
        let point2 = `${x0 + half_l}, ${y0 + h}`; // Bottom right
        let point3 = `${x0 - half_l}, ${y0 + h}`; // Bottom left

        return `${point1} ${point2} ${point3}`;
    }

    render() {
        return super.render() + `
    <polygon points='${this.getPoints()}' fill='${this.fill}' />
    <text ${this.getTextProperties()}>${this.text}</text>
</svg>
`;
    }
}

module.exports = { Circle, Square, Triangle };
