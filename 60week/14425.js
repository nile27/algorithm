const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const S = new Set(input.slice(1, N + 1));
const Q = input.slice(N + 1); 

let count = 0;

for (const query of Q) {
    if (S.has(query)) {
        count++;
    }
}

console.log(count);
