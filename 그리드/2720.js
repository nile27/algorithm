const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
input.shift();
let coins = input.map(Number);
let money = [25, 10, 5, 1];
let ans = [],
  total = [];
let idx = 0;

for (let coin of coins) {
  idx = 0;
  total = Array(4).fill(0);
  while (coin > 0) {
    if (coin < money[idx]) {
      idx++;
    } else {
      coin -= money[idx];
      total[idx] += 1;
    }
  }
  ans.push(total);
}

console.log(ans.map((item) => item.join(" ")).join("\n"));
