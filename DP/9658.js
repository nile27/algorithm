const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input, 10);

function solve(n) {
    const dp = new Array(n + 1).fill(false);

    if (n >= 1) dp[1] = false;
    if (n >= 2) dp[2] = true;
    if (n >= 3) dp[3] = false;
    if (n >= 4) dp[4] = true;

    for (let i = 5; i <= n; i++) {
        if (!dp[i - 1] || !dp[i - 3] || !dp[i - 4]) {
            dp[i] = true;
        } else {
            dp[i] = false;
        }
    }

    return dp[n] ? "SK" : "CY";
}

console.log(solve(N));
