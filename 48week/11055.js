const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const arr = input[1].split(' ').map(Number);

const dp = [...arr];
for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
            dp[i] = Math.max(dp[i], dp[j] + arr[i]);
        }
    }
}

console.log(Math.max(...dp));
