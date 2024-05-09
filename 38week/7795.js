const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");
const test_case = input.shift();
let ans = [];
let count = 0;
let [A, B] = [[], []];

for (let i = 0; i < test_case; i++) {
  input.shift();
  [A, B] = [
    input
      .shift()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b),
    input.shift().split(" ").map(Number),
  ];

  for (let b of B) {
    for (let a = 0; a < A.length; a++) {
      if (A[a] > b) {
        count += A.length - a;
        break;
      }
    }
  }

  ans.push(count);
  count = 0;
}
console.log(ans.join("\n"));
