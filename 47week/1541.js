const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const parts = input.split('-');
let sum = 0;

const firstPart = parts[0].split('+').map(Number).reduce((acc, curr) => acc + curr, 0);
sum += firstPart;

for (let i = 1; i < parts.length; i++) {
    const tempSum = parts[i].split('+').map(Number).reduce((acc, curr) => acc + curr, 0);
    sum -= tempSum;
}

console.log(sum);
