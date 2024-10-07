const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, L] = input[0].split(' ').map(Number);
const leaks = input[1].split(' ').map(Number).sort((a, b) => a - b);

let count = 0;
let position = 0;

for (let i = 0; i < N; i++) {
    if (leaks[i] > position) {
        count++;
        position = leaks[i] + L - 1;
    }
}

console.log(count);
