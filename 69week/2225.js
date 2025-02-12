const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = Number(input[0]);
const K = Number(input[1]);
const limit = 1000000000;

const dp = Array.from({ length: K + 1 }, () => Array(N + 1).fill(0));

for (let n = 0; n <= N; n++) {
  dp[1][n] = 1;
}
for (let k = 1; k <= K; k++) {
  dp[k][0] = 1;
}

for (let k = 2; k <= K; k++) {
  for (let n = 1; n <= N; n++) {
    dp[k][n] = (dp[k][n - 1] + dp[k - 1][n]) % limit;
  }
}

console.log(dp[K][N]);
