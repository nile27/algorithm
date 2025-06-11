const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, arr] = [Number(input[0]), input[1].split(" ").map(Number)];
let result = 0;

function backtrack(sum) {
  let target = 0;
  let pop = 0;
  if (arr.length === 2) {
    result = Math.max(sum, result);
    return;
  }

  for (let i = 1; i < arr.length - 1; i++) {
    target = arr[i + 1] * arr[i - 1];

    pop = arr.splice(i, 1)[0];
    backtrack(target + sum);
    arr.splice(i, 0, pop);
  }
}

backtrack(0);

console.log(result);
