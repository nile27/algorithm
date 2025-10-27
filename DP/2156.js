const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, arr] = [Number(input[0]), input.slice(1).map(Number)];

const dp = Array(n).fill(0);

dp[1] = arr[0];
dp[2] = arr[1]+arr[0];

for(let i=3; i<=n; i++){
  dp[i] = Math.max(dp[i-1],dp[i-3]+arr[i-1]+arr[i-2],dp[i-2]+arr[i-1]);
}
console.log(dp[n]);
