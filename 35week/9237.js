const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
let days = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
for (let i = 0; i < N; i++) {
  days[i] = days[i] + i + 1;
}
console.log(Math.max(...days) + 1);
