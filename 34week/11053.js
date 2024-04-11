const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [N, arr] = [Number(input[0]), input[1].split(" ").map(Number)];
const dpArr = new Array(N).fill(1);
let start = 0;

for (let i = 0; i < N - 1; i++) {
  start = arr[i];
  for (let j = i + 1; j < N; j++) {
    if (start < arr[j]) {
      dpArr[j] = Math.max(dpArr[j], dpArr[i] + 1);
    }
  }
}

console.log(Math.max(...dpArr));
