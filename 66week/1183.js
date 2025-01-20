const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = Number(input[0]);
const arr = [];
let [a, b, mid1, mid2, result] = [0, 0, 0, 0, 0];
for (let i = 1; i <= N; i++) {
  [a, b] = input[i].split(" ").map(Number);
  arr.push(a - b);
}

arr.sort((x, y) => x - y);

if (N % 2 === 1) {
  result = 1;
} else {
  mid1 = arr[Math.floor(N / 2) - 1];
  mid2 = arr[Math.floor(N / 2)];
  result = mid2 - mid1 + 1;
}

console.log(result);
