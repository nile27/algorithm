const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const times = input[1].split(' ').map(Number);

times.sort((a, b) => a - b);

let totalWaitTime = 0;
let currentWaitTime = 0;

for (let i = 0; i < N; i++) {
    currentWaitTime += times[i];
    totalWaitTime += currentWaitTime;
}

console.log(totalWaitTime);
