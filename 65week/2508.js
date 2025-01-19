const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = parseInt(input[0]);
let index = 1;
const results = [];
let arr = [];
let count = 0;

let r, c;

for (let tc = 0; tc < N; tc++) {
  if (input[index] === "") index++;
  [r, c] = input[index].split(" ").map(Number);
  index++;

  arr = [];
  for (let i = 0; i < r; i++) {
    arr.push(input[index].split(""));
    index++;
  }

  count = 0;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c - 2; j++) {
      if (arr[i][j] === ">" && arr[i][j + 1] === "o" && arr[i][j + 2] === "<") {
        count++;
      }
    }
  }

  for (let i = 0; i < r - 2; i++) {
    for (let j = 0; j < c; j++) {
      if (arr[i][j] === "v" && arr[i + 1][j] === "o" && arr[i + 2][j] === "^") {
        count++;
      }
    }
  }

  results.push(count);
}

console.log(results.join("\n"));
