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
        return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
    }
}

module.exports = StringCalculator;
