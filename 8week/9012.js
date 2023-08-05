const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().split("\n");
const leng = Number(input.shift());
let count = 0;
let ans = [];
let split = [];

for (let i = 0; i < leng; i++) {
  count = 0;
  split = input[i].split("");
  for (let j = 0; j < split.length; j++) {
    if (split[j] === "(") count++;
    if (split[j] === ")") count--;
    if (count < 0) break;
  }
  count === 0 ? ans.push("YES") : ans.push("NO");
}
console.log(ans.join("\n"));
