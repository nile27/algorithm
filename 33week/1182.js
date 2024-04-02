const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const [N, sum] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
let ans = 0;
let stack = [];
let visit = Array.from({ length: N }, () => false);
function dfs(depth, num) {
  if (num === sum && depth >= 1) {
    console.log(stack);
    ans++;
  }

  for (let i = depth; i < N; i++) {
    if (!visit[i]) {
      visit[i] = true;
      stack.push(arr[i]);
      dfs(i + 1, num + arr[i]);
      visit[i] = false;
      stack.pop(arr[i]);
    }
  }
}
dfs(0, 0);

console.log(ans);
