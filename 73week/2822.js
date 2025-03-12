const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const scoreTable = {};
let result = {};
let total = 0;

input.forEach((item, idx) => {
  scoreTable[idx + 1] = item;
});

result = Object.keys(scoreTable)
  .sort((a, b) => scoreTable[a] - scoreTable[b])
  .slice(3)
  .sort((a, b) => a - b);
total = result.reduce((acc, cur) => {
  if (typeof acc === "string") return scoreTable[cur] + scoreTable[acc];
  return scoreTable[cur] + acc;
});

console.log(`${total}\n${result.join(" ")}`);
