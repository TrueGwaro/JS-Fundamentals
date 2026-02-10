// 5-to_integer.js

const arg = process.argv[2];
const num = parseInt(arg, 10); // Convert to integer

if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}
