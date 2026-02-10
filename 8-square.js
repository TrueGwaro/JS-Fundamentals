// 8-square.js

const arg = process.argv[2];
const size = parseInt(arg, 10);

if (isNaN(size) || size <= 0) {
    console.log("Missing size");
} else {
    const row = "X".repeat(size); // Create one row of Xs
    for (let i = 0; i < size; i++) {
        console.log(row);
    }
}
