const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [num1, den1] = input[0].split(' ').map(Number);
const [num2, den2] = input[1].split(' ').map(Number);
const numSum = num1 * den2 + num2 * den1;
const denSum = den1 * den2;

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const div = gcd(numSum, denSum);
const resultNum = numSum / div;
const resultDen = denSum / div;

console.log(`${resultNum} ${resultDen}`);
