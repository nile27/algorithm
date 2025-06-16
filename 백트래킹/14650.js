const fs = require("fs");
const N = Number(fs.readFileSync("./input.txt").toString());
let numArr = [0, 1, 2];
let madeNum = [],
  result = 0;

if (N === 1) {
  console.log(0);
  return;
}

function backtracking(n) {
  if (n === N) {
    let num = Number(madeNum.join(""));

    madeNum[0] !== 0 && num % 3 === 0 && num >= 3 && result++;
    return;
  }

  for (let i = 0; i < 3; i++) {
    madeNum.push(numArr[i]);

    backtracking(n + 1);
    madeNum.pop();
  }
}

backtracking(0);

console.log(result);
