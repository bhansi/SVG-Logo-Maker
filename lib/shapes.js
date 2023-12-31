class Shape {
    setColor(color) {
        this.color = color;
        return this;
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<circle cx='150' cy='100' r='30' fill='${this.color}' />`;
    }
}

class Square extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<rect x='125' y='75' width='50' height='50' fill='${this.color}' />`;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
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
        return `<polygon points='${this.getPoints()}' fill='${this.color}' />`;
    }
}

module.exports = { Circle, Square, Triangle };
