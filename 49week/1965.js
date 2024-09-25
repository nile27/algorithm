const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const boxes = input[1].split(' ').map(Number);

const dp = Array(N).fill(1); 

for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (boxes[j] < boxes[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));
