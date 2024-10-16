const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const skill = input[1].split(' ').map(Number).sort((a, b) => a - b);

let min = Infinity;

for (let i = 0; i < N; i++) {
    min = Math.min(min, skill[i] + skill[2 * N - 1 - i]);
}

console.log(min);
