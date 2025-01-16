const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [W, H, X, Y, P] = input[0].split(" ").map(Number);
const R = H / 2;
let count = 0;

for (let i = 1; i <= P; i++) {
  const [px, py] = input[i].split(" ").map(Number);

  if ((X - px) ** 2 + (Y + R - py) ** 2 <= R ** 2) {
    count++;
  } else if ((X + W - px) ** 2 + (Y + R - py) ** 2 <= R ** 2) {
    count++;
  } else if (px >= X && px <= X + W && py >= Y && py <= Y + H) {
    count++;
  }
}

console.log(count);
