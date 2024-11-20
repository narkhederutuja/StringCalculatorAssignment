// StringCalculator.js
class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;

        // Handle custom delimiters
        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const delimiterEnd = numbers.indexOf("\n");
            delimiter = new RegExp(numbers.substring(2, delimiterEnd));
            numbers = numbers.substring(delimiterEnd + 1);
        }

        // Split the numbers based on the delimiters
        const numArray = numbers.split(delimiter);

        // Convert strings to numbers and validate
        let total = 0;
        const negatives = [];
        numArray.forEach(num => {
            const parsed = parseInt(num, 10);
            if (isNaN(parsed)) return;
            if (parsed < 0) {
                negatives.push(parsed);
            } else {
                total += parsed;
            }
        });

        // Throw exception for negative numbers
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return total;
    }
}

module.exports = StringCalculator; // Export the class
