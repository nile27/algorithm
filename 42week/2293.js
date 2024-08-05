let fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().split("\n");
let shift = input.shift().split(" ");
let [n, k] = [Number(shift[0]), Number(shift[1])];
let dp = Array(k + 1).fill(0);
dp[0] = 1;
input = input.map(Number);

for (let i = 0; i < input.length; i++) {
  for (let j = input[i]; j <= k; j++) {
    dp[j] += dp[j - input[i]];
  }
}

console.log(dp[k]);
