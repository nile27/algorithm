const fs = require('fs');
const S = BigInt(fs.readFileSync('/dev/stdin').toString().trim());

let sum = 0n;
let count = 0n;
let num = 1n;

while (sum + num <= S) {
    sum += num;
    count++;
    num++;
}

console.log(count.toString());
