const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const notation = input[1].trim();
const val = input.slice(2).map(Number);

const stack = [];

let str = "";
let [a, b] = [0, 0];

for (let i = 0; i < notation.length; i++) {
  str = notation[i];

  if (str >= "A" && str <= "Z") {
    stack.push(val[str.charCodeAt(0) - "A".charCodeAt(0)]);
  } else {
    b = stack.pop();
    a = stack.pop();

    switch (str) {
      case "+":
        stack.push(a + b);
        break;
      case "-":
        stack.push(a - b);
        break;
      case "*":
        stack.push(a * b);
        break;
      case "/":
        stack.push(a / b);
        break;
    }
  }
}

console.log(stack[0].toFixed(2));
