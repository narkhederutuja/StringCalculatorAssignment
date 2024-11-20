// StringCalculator.test.js
const StringCalculator = require("../src/StringCalculator");

describe("StringCalculator", () => {
    test("should return 0 for an empty string", () => {
        const calculator = new StringCalculator();
        expect(calculator.add("")).toBe(0);
    });

    test("should return the number itself when one number is provided", () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1")).toBe(1);
    });

    test("should return the sum of two numbers separated by a comma", () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1,5")).toBe(6);
    });

    test("should return the sum of multiple numbers", () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1,2,3")).toBe(6);
    });

    test("should handle new lines between numbers", () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    test("should support custom delimiters", () => {
        const calculator = new StringCalculator();
        expect(calculator.add("//;\n1;2;3")).toBe(6);
    });

    test("should throw an exception for negative numbers", () => {
        const calculator = new StringCalculator();
        expect(() => calculator.add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
        expect(() => calculator.add("//;\n1;-2;3")).toThrow("Negative numbers not allowed: -2");
    });
});
