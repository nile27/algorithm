const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, arr] = [Number(input[0]), input[1].split(" ").map(Number)];

arr.sort((a, b) => a - b);

let target = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] > target + 1) break;
  target += arr[i];
}

console.log(target + 1);
