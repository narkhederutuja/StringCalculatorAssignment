const StringCalculator = require("../src/StringCalculator");

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
    expect(calculator.add("1,2")).toBe(3);
});
