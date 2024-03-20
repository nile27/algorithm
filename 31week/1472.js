const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("")
  .map(Number);

let ans = input.sort((a, b) => b - a);

console.log(ans.join(""));
