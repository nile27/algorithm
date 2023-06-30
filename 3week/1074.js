const fs = require("fs");
const [N, R, C] = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let leng = 2 ** N;
let ans = 0;

function zFunc(num, r, c) {
  if (num <= 0) return;
  let part = 0;
  if (r < num / 2 && c < num / 2) {
    part = 0;
  } else if (r < num / 2 && c >= num / 2) {
    part = 1;
    c = c - num / 2;
  } else if (r >= num / 2 && c < num / 2) {
    part = 2;
    r = r - num / 2;
  } else {
    part = 3;
    r = r - num / 2;
    c = c - num / 2;
  }

  zFunc(num / 2, r, c);

  ans = ans + (num / 2) * (num / 2) * part;
}

zFunc(leng, R, C);

console.log(ans);
