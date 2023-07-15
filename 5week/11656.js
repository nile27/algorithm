const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("");
let ans = [];
ans = input
  .map((_, idx) => {
    return input.slice(idx).join("");
  })
  .sort();

console.log(ans.join("\n"));
