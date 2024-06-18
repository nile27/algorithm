const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let N = input.shift();
let answer = [
  input[0],
  input[0] + input[1],
  Math.max(input[0], input[1]) + input[2],
];

for (let i = 3; i < N; i++) {
  answer[i] = Math.max(
    answer[i - 2] + input[i],
    answer[i - 3] + input[i - 1] + input[i]
  );
}

console.log(answer[N - 1]);
