const fs = require("fs");
const [N, F] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const front = Math.floor(N / 100) * 100;
let num = 0;

for (let i = 0; i < 100; i++) {
  num = front + i;
  if (num % F === 0) {
    console.log(("00" + i).slice(-2));
    break;
  }
}
