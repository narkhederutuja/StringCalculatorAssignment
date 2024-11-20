const StringCalculator = require("../src/StringCalculator");

test("should support custom delimiters", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;2")).toBe(3);
});
