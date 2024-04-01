const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const test_case = Number(input.shift());

let ans = 0;
let arr = [];
function dfs(depth, num) {
  if (depth > num) {
    return;
  } else if (depth === num) {
    ans += 1;
    return;
  }

  for (let i = 1; i < 4; i++) {
    depth += i;
    dfs(depth, num);
    depth -= i;
  }
}

for (let i = 0; i < test_case; i++) {
  dfs(0, Number(input[i]));
  arr.push(ans);
  ans = 0;
}

console.log(arr.join("\n"));
