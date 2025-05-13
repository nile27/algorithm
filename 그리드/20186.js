const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const nums = input[0].split(" ").map(Number);
const sortedNums = [...nums].sort((a, b) => b - a);
let select = [];
let ans = 0;

for (let i = 0; i < K; i++) {
  select.push(nums.indexOf(sortedNums[i]));
}
select.sort((a, b) => a - b);
for (let idx = 0; idx < K; idx++) {
  ans = ans + nums[select[idx]] - idx;
}

console.log(ans);
