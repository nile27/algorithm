const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const T = input[0];
const ts = input.slice(1);

const dp = Array(101).fill(0);
dp[1] = dp[2] = dp[3] = 1;

for (let i = 4; i <= 100; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
}

let result = ts.map(n => dp[n]);
console.log(result.join('\n'));
