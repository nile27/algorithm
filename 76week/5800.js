const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const K = Number(input[0]);

let arr = [],
  N = 0,
  score = [];
let maxGap = 0,
  gap = 0;

for (let i = 1; i <= K; i++) {
  arr = input[i].split(" ").map(Number);
  N = arr[0];
  score = arr.slice(1);
  score.sort((a, b) => b - a);

  maxGap = 0;
  for (let j = 0; j < score.length - 1; j++) {
    gap = score[j] - score[j + 1];
    if (gap > maxGap) maxGap = gap;
  }

  console.log(`Class ${i}`);
  console.log(
    `Max ${score[0]}, Min ${score[score.length - 1]}, Largest gap ${maxGap}`
  );
}
