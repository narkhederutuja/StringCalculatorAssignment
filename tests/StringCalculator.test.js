const StringCalculator = require("../src/StringCalculator");

test("should handle new lines between numbers", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1\n2,3")).toBe(6);
});
