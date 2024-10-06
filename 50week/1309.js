const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input, 10);
const MOD = 9901;

const dp = Array.from({ length: N + 1 }, () => [0, 0, 0]);

dp[1][0] = 1;
dp[1][1] = 1;
dp[1][2] = 1;

for (let i = 2; i <= N; i++) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % MOD;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
}

const result = (dp[N][0] + dp[N][1] + dp[N][2]) % MOD;
console.log(result);
