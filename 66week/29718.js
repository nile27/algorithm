const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const a = parseInt(input[n + 1]);

let max = 0;

let sum = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < a; j++) {
    sum += arr[i][j];
  }
}
max = Math.max(max, sum);

for (let j = a; j < m; j++) {
  for (let i = 0; i < n; i++) {
    sum = sum - arr[i][j - a] + arr[i][j];
  }
  max = Math.max(max, sum);
}

console.log(max);
