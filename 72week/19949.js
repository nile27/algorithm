const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answerCount = 0;
let myCorrect = Array(10).fill(0);

const backtrack = (depth, correct) => {
  if (depth === 10) {
    if (correct >= 5) answerCount++;
    return;
  }

  for (let i = 1; i < 6; i++) {
    if (depth >= 2 && myCorrect[depth - 1] === i && myCorrect[depth - 2] === i)
      continue;

    myCorrect[depth] = i;
    backtrack(depth + 1, correct + (i === input[depth] ? 1 : 0));
    myCorrect[depth] = 0;
  }
};

backtrack(0, 0);
console.log(answerCount);
