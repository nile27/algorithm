const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

const Count1 = Array(26).fill(0);
const Count2 = Array(26).fill(0);
let result = 0
for (let str of str1) {
    Count1[str.charCodeAt(0) - 97]++;
}
for (let str of str2) {
    Count2[str.charCodeAt(0) - 97]++;
}

for (let i = 0; i < 26; i++) {
    result += Math.abs(Count1[i] - Count2[i]);
}

console.log(result);
