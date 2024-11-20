class StringCalculator {
    add(numbers) {
        if (!numbers) return 0;

        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const delimiterEnd = numbers.indexOf("\n");
            delimiter = new RegExp(numbers.substring(2, delimiterEnd));
            numbers = numbers.substring(delimiterEnd + 1);
        }

        const numArray = numbers.split(delimiter);
        const negatives = [];

        const sum = numArray.reduce((total, num) => {
            const parsed = parseInt(num, 10);
            if (parsed < 0) {
                negatives.push(parsed);
            }
            return total + parsed;
        }, 0);

        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return sum;
    }
}

module.exports = StringCalculator;
