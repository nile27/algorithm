const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const numArr = input.slice(1).map((item) => item.trim());
let result = 1;
let set = new Set();
let count = -1;
let num = "";

while (set.size < N) {
  for (let j = 0; j < N; j++) {
    num = numArr[j].slice(count);

    if (set.has(num)) {
      result++;
      count--;
      set = new Set();

      break;
    } else {
      set.add(num);
    }
  }
}
console.log(result);
