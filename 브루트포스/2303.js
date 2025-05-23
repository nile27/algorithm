const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = parseInt(input[0]);
const cards = input.slice(1).map((line) => line.split(" ").map(Number));

let maxScore = -1;
let result = -1;
let max = 0,
  sum = 0,
  lastNum = 0;
let card = [];
for (let i = 0; i < N; i++) {
  card = cards[i];
  max = 0;
  for (let a = 0; a < 5; a++) {
    for (let b = a + 1; b < 5; b++) {
      for (let c = b + 1; c < 5; c++) {
        sum = card[a] + card[b] + card[c];
        lastNum = sum % 10;
        if (lastNum > max) max = lastNum;
      }
    }
  }

  if (max >= maxScore) {
    maxScore = max;
    result = i + 1;
  }
}

console.log(result);
