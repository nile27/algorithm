const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift();

console.log(input.sort((a, b) => a - b).join("\n"));
