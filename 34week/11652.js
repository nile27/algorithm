const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);
const leng = input.shift();
let ansObj = {};

for (let item of input) {
  !ansObj[item] ? (ansObj[item] = 1) : (ansObj[item] += 1);
}
let arr = Object.keys(ansObj);
let ans = arr[0];

for (let key of arr) {
  if (ansObj[ans] < ansObj[key]) ans = key;
  else if (ansObj[ans] === ansObj[key])
    ans = BigInt(ans) > BigInt(key) ? key : ans;
}

console.log(ans.toString());
