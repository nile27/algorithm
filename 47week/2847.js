const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const N = input[0];
const levels = input.slice(1);

let totalDecrease = 0;

for (let i = N - 2; i >= 0; i--) {
    if (levels[i] >= levels[i + 1]) {
        totalDecrease += (levels[i] - levels[i + 1] + 1);
        levels[i] = levels[i + 1] - 1;
    }
}

console.log(totalDecrease);
