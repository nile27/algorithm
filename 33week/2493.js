const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [N, arr] = [Number(input.shift()), input[0].split(" ").map(Number)];

let ans = [0];

let i = 1;
let stack = [0];

while (i < N) {
  if (stack.length) {
    while (stack.length) {
      if (arr[stack[stack.length - 1]] <= arr[i]) stack.pop();
      else break;
    }
  }
  stack.push(i);
  if (stack.length === 1) ans.push(0);
  else ans.push(stack[stack.length - 2] + 1);

  i += 1;
}

console.log(ans.join(" "));
