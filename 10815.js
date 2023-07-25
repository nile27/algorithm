const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let findArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let foundArr = input[3].split(" ").map(Number);

let ans = [];

function findCard(card, start, end) {
  if (start > end) return ans.push(0);

  let mid = parseInt((start + end) / 2);

  if (findArr[mid] === card) return ans.push(1);
  else if (findArr[mid] > card) findCard(card, start, mid - 1);
  else findCard(card, mid + 1, end);
}

for (let i = 0; i < foundArr.length; i++) {
  findCard(foundArr[i], 0, findArr.length - 1);
}

console.log(ans.join(" "));
