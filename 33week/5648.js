const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "))
  .flat()
  .filter((item) => item.length !== 0);
const leng = input.shift();

let ans = input
  .map((item) => Number(item.split("").reverse().join("")))
  .sort((a, b) => a - b);

console.log(ans.join("\n"));
