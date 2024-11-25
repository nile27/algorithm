const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, arr] = [Number(input.shift()), input.shift().split(" ").map(Number)];
let i = Number(input.shift());
let [x, y] = [0, 0];
let ans = [];

const sum = Array(N + 1).fill(0);
for (let j = 1; j <= N; j++) {
  sum[j] = sum[j - 1] + arr[j - 1];
}


for (let list of input) {
  [x, y] = list.split(" ").map(Number);
  ans.push(sum[y] - sum[x - 1]);
}

console.log(ans.join("\n"));
