const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = parseInt(input[0], 10);
const board = input.slice(1).map((line) => line.split(""));

let ans = [0, 0];
let leng_r = 0,
  leng_c = 0;

for (let i = 0; i < n; i++) {
  leng_r = 0;
  leng_c = 0;

  for (let j = 0; j < n; j++) {
    if (board[i][j] === ".") {
      leng_r++;
    } else {
      leng_r = 0;
    }
    if (leng_r === 2) {
      ans[0]++;
    }

    if (board[j][i] === ".") {
      leng_c++;
    } else {
      leng_c = 0;
    }
    if (leng_c === 2) {
      ans[1]++;
    }
  }
}

console.log(ans.join(" "));
