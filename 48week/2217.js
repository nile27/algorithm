const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const ropes = input.slice(1).map(Number).sort((a, b) => b - a);

let maxWeight = 0;

for (let i = 0; i < N; i++) {
    const weight = ropes[i] * (i + 1);
    if (weight > maxWeight) {
        maxWeight = weight;
    }
}

console.log(maxWeight);
