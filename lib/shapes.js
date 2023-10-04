class Shape {
    constructor(fill, fontFamily, textColor) {
        this.fill = fill;
        this.fontFamily = fontFamily;
        this.textColor = textColor;
    }

    getTextProperties() {
        return `x='150' y='100' fill='${this.textColor} text-anchor='middle' dominant-baseline='middle'`;
    }

    render() {
        return "<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>\n";
    }
}

class Circle extends Shape {
    constructor(fill, fontFamily, textColor, text) {
        super(fill, fontFamily, textColor);
        this.text = text;
    }

    render() {
        return super.render() + `
        \t<circle cx='150' cy='100' r='20' fill='${this.fill}' />\n
        \t<text ${this.getTextProperties()}>${this.text}</text>\n
        </svg>\n`;
    }
}

class Square extends Shape {
    constructor(fill, fontFamily, textColor) {
        super(fill, fontFamily, textColor);
    }

    render() {
        return super.render() + `
        \t<rect x='150' y='100' width='30' height='30' fill='${this.fill}' />
        \t<text ${this.getTextProperties()}</text>\n
        </svg>\n`;
    }
}

class Triangle extends Shape {
    constructor(fill, fontFamily, textColor) {
        super(fill, fontFamily, textColor);
    }

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
        \t<polygon points='${this.getPoints()}' fill='${this.fill}' />\n
        \t<text ${this.getTextProperties()}>${this.text}</text>\n
        </svg>`;
    }
}

module.exports = Circle, Triangle, Square;
