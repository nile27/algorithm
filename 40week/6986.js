const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let [N, K] = input.shift().split(" ").map(Number);
input = input.map(Number);

let result = input.sort((a, b) => a - b).slice(K, input.length - K);
let result2 = K * result[0] + K * result[result.length - 1];
let sum = 0;
let ans = [];

for (let i of result) {
  sum += i;
}
ans = [sum / result.length, (result2 + sum) / N];

console.log(`${(ans[0] + 1e-8).toFixed(2)}\n${(ans[1] + 1e-8).toFixed(2)}`);
