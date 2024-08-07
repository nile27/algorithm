const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const selected = [];

function backtrack(start, depth) {
  if (depth === M) {
    console.log(selected.join(" "));
    return;
  }

  for (let i = start; i < N; i++) {
    selected.push(numbers[i]);
    backtrack(i + 1, depth + 1);
    selected.pop();
  }
}

backtrack(0, 0);
