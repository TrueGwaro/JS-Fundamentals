// 9-add.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Get command-line arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert arguments to integers
const num1 = parseInt(arg1, 10);
const num2 = parseInt(arg2, 10);

// Print the sum using the add function
console.log(add(num1, num2));
