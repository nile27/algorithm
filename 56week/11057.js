const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input, 10);
const MOD = 10007;
const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

for (let i = 0; i < 10; i++) {
    dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k <= j; k++) {
            dp[i][j] = (dp[i][j] + dp[i - 1][k]) % MOD;
        }
    }
}
let result = 0;
for (let i = 0; i < 10; i++) {
    result = (result + dp[N][i]) % MOD;
}

console.log(result);
