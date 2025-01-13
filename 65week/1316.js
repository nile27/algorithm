const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const test_case = parseInt(input.shift());

let result = 0;
function solve(str) {
  let lastWord = "";
  let wordObj = {};

  for (let i of str) {
    if (!wordObj[i]) {
      wordObj[i] = 1;
    } else if (wordObj[i] && lastWord === i) {
      wordObj[i]++;
    } else {
      return false;
    }
    lastWord = i;
  }

  return true;
}

for (let i = 0; test_case > i; i++) {
  solve(input[i]) && result++;
}

console.log(result);
