const { Circle, Square, Triangle } = require("./shapes.js");

describe("Shapes", () => {
    const circle = new Circle("blue", "serif", "white", "SVG");
    const square = new Square("blue", "serif", "white", "SVG");
    const triangle = new Triangle("blue", "serif", "white", "SVG");

    describe("Cricle", () => {
        it("Should take relevant arguments and give back circle SVG text.", () => {
            const expectedOutput = `<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='150' cy='100' r='30' fill='blue' />
    <text x='150' y='100' fill='white' font-family='serif' text-anchor='middle' dominant-baseline='middle'>SVG</text>
</svg>
`;
            expect(expectedOutput).toEqual(circle.render());
        });
    });

    describe("Square", () => {
        it("Should take relevant arguments and give back square SVG text.", () => {
            const expectedOutput = `<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    <rect x='125' y='75' width='50' height='50' fill='blue' />
    <text x='150' y='100' fill='white' font-family='serif' text-anchor='middle' dominant-baseline='middle'>SVG</text>
</svg>
`;
            expect(expectedOutput).toEqual(square.render());
        });
    });

    describe("Triangle", () => {
        it("Should take relevant arguments and give back triangle SVG text.", () => {
            const expectedOutput = `<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    <polygon points='150, 50 193, 125 107, 125' fill='blue' />
    <text x='150' y='100' fill='white' font-family='serif' text-anchor='middle' dominant-baseline='middle'>SVG</text>
</svg>
`;
            expect(expectedOutput).toEqual(triangle.render());
        });
    });
});