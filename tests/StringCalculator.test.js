const StringCalculator = require("../src/StringCalculator");

test("should support custom delimiters", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;2")).toBe(3);
});
test("should throw an exception for negative numbers", () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});
