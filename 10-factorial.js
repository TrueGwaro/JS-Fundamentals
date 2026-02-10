// 10-factorial.js

// Recursive function to compute factorial
function factorial(n) {
    if (n <= 1) return 1; // Base case: factorial of 0 or 1 is 1
    return n * factorial(n - 1); // Recursive call
}

// Get the first argument and convert it to an integer
const arg = process.argv[2];
const num = parseInt(arg, 10);

// Print the factorial
console.log(factorial(isNaN(num) ? 0 : num));
