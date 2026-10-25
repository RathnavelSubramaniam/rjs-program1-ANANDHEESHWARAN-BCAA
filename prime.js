/**
 * Checks if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} True if prime, false otherwise.
 */
const isPrime = (num) => {
    if (num <= 1) {
        return false;;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true; // Change this return statement
};

let number = 12;
if (isPrime(number)) {
    console.log(number + " is a prime number");
} else {
    console.log(number + " is not a prime number");
}

module.exports = {isPrime};
