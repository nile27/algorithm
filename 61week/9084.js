const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);
let [N, M, coin, i] = [0, 0, 0, 0];
let [result, coins, dp] = [[], [], []];
let index = 1;

for (let t = 0; t < T; t++) {
  N = parseInt(input[index]);
  coins = input[index + 1].split(" ").map(Number);
  M = parseInt(input[index + 2]);

  dp = Array(M + 1).fill(0);
  dp[0] = 1;

  for (let c = 0; c < N; c++) {
    coin = coins[c];
    for (i = coin; i <= M; i++) {
      dp[i] += dp[i - coin];
    }
  }

  result.push(dp[M]);
  index += 3;
}

console.log(result.join("\n"));
