const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split("");
let result = 0;
let start = 0,
  end = 0;
for (let i = 0; i < N; i++) {
  if (arr[i] === "P") {
    start = Math.max(i - K, 0);
    end = Math.min(i + K, N - 1);

    for (let j = start; j <= end; j++) {
      if (arr[j] === "H") {
        arr[j] = "X";
        result++;
        break;
      }
    }
  }
}

console.log(result);
