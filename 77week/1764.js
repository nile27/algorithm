const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let ansObj = {};
input.forEach((item, idx) => {
  if (idx === 0) {
    return;
  } else if (ansObj[item]) {
    ansObj[item]++;
  } else ansObj[item] = 1;
});
let ans = Object.keys(ansObj).filter((item) => ansObj[item] > 1);
console.log(ans.length, `\n${ans.sort().join("\n")}`);
