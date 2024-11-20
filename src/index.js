// index.js
const StringCalculator = require("./StringCalculator");

// Example usage
const calculator = new StringCalculator();

try {
    const result = calculator.add("1,2,3");
    console.log(`The result is: ${result}`); // Should print: The result is: 6
} catch (error) {
    console.error(error.message);
}
