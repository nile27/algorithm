const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const [N, arr] = [Number(input[0]), input[1].split(" ").map(Number)];

let dp = new Array(N).fill(0);
dp[0] = arr[0];
for (let i = 1; i < N; i++) {
  dp[i] = arr[i] > dp[i - 1] + arr[i] ? arr[i] : arr[i] + dp[i - 1];
}
console.log(Math.max(...dp));
