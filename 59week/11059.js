const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solve(s) {
  const n = s.length;
  let length = 0;
  let [len, start, mid, leftSum, rightSum] = [0, 0, 0, 0, 0];

  for (len = 2; len <= n; len += 2) {
    for (start = 0; start <= n - len; start++) {
      mid = start + len / 2;
      leftSum = s
        .slice(start, mid)
        .split("")
        .reduce((acc, cur) => acc + Number(cur), 0);
      rightSum = s
        .slice(mid, start + len)
        .split("")
        .reduce((acc, cur) => acc + Number(cur), 0);
      if (leftSum === rightSum) {
        length = len;
      }
    }
  }

  return length;
}

console.log(solve(input));
