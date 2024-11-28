const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const words = input.slice(1).sort();

let count = 1;
for (let i = 0; i < N - 1; i++) {
    if (!words[i + 1].startsWith(words[i])) {
        count++;
    }
}

console.log(count);
