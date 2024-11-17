const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0], 10);
const num = input[1].split(" ").map(Number);
const operator = input[2].split(" ").map(Number); // +, -, *, /

let max = -Infinity;
let min = Infinity;

function dfs(depth, result, add, sub, mul, div) {
  if (depth === N) {
    if (result === 0) result = 0;

    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  }

  if (add > 0) {
    dfs(depth + 1, result + num[depth], add - 1, sub, mul, div);
  }
  if (sub > 0) {
    dfs(depth + 1, result - num[depth], add, sub - 1, mul, div);
  }
  if (mul > 0) {
    dfs(depth + 1, result * num[depth], add, sub, mul - 1, div);
  }
  if (div > 0) {
    dfs(
      depth + 1,
      result < 0
        ? -Math.floor(-result / num[depth])
        : Math.floor(result / num[depth]),
      add,
      sub,
      mul,
      div - 1
    );
  }
}

dfs(1, num[0], operator[0], operator[1], operator[2], operator[3]);

console.log(max === 0 ? 0 : max);
console.log(min === 0 ? 0 : min);
