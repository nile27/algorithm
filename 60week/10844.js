const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

const MOD = 1000000000;
const dp = Array.from({ length: input + 1 }, () => Array(10).fill(0));
let result = 0

for (let j = 1; j <= 9; j++) {
    dp[1][j] = 1; 
}

for (let i = 2; i <= input; i++) {
    for (let j = 0; j <= 9; j++) {
        if (j > 0) dp[i][j] += dp[i - 1][j - 1];
        if (j < 9) dp[i][j] += dp[i - 1][j + 1];
        dp[i][j] %= MOD;
    }
}

result = dp[input].reduce((sum, count) => (sum + count) % MOD, 0);

console.log(result);
