const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = parseInt(input.shift());
let [N, arr] = [0, []];
let visited = [];
let count = 0;
let currentIdx = 0;

for (let i = 0; i < testCase; i++) {
  N = Number(input[i * 2]);
  arr = input[i * 2 + 1].split(" ").map((item) => Number(item));
  visited = Array(N + 1).fill(false);
  count = 0;

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      currentIdx = i;
      while (!visited[currentIdx]) {
        visited[currentIdx] = true;
        currentIdx = arr[currentIdx - 1];
      }

      count++;
    }
  }

  console.log(count);
}
