const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let findArr = input[1].split(" ").map(Number);
let foundArr = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let ans = [];

function sortFunc(n, start, end) {
  if (start > end) return true;

  let mid = parseInt((start + end) / 2);

  if (foundArr[mid] === n) return false;
  else if (foundArr[mid] < n) return sortFunc(n, mid + 1, end);
  else return sortFunc(n, start, mid - 1);
}

for (let i of findArr) {
  sortFunc(i, 0, foundArr.length - 1) ? ans.push(i) : null;
}
ans.sort((a, b) => a - b);
console.log(ans.length === 0 ? 0 : `${ans.length}\n` + ans.join(" "));
