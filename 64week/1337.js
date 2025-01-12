const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const N = input[0]; 
const num = input.slice(1);

num.sort((a, b) => a - b);
let answer = 4;

for (let i = 0; i < N; i++) {
  let start = i;
  let end = N - 1;

  while (start < end) {
    if (num[end] - num[start] > 4) {
      end -= 1;
    } else {
      const tempAnswer = 4 - (end - start);
      answer = Math.min(answer, tempAnswer);
      break;
    }
  }
}

console.log(answer);
