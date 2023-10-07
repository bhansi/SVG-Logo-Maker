const { Circle, Square, Triangle } = require("./shapes.js");

describe("Shapes", () => {
    const circle = new Circle().setColor("blue");
    const square = new Square().setColor("blue");
    const triangle = new Triangle().setColor("blue");

    describe("Cricle", () => {
        it("Should take relevant arguments and give back circle SVG text.", () => {
            const expectedOutput = `<circle cx='150' cy='100' r='30' fill='blue' />`;
            expect(expectedOutput).toEqual(circle.render());
        });
    });

    describe("Square", () => {
        it("Should take relevant arguments and give back square SVG text.", () => {
            const expectedOutput = `<rect x='125' y='75' width='50' height='50' fill='blue' />`;
            expect(expectedOutput).toEqual(square.render());
        });
    });

    describe("Triangle", () => {
        it("Should take relevant arguments and give back triangle SVG text.", () => {
            const expectedOutput = `<polygon points='150, 50 193, 125 107, 125' fill='blue' />`;
            expect(expectedOutput).toEqual(triangle.render());
        });
    });
});