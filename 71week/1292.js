const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);
let [num, count] = [1, 1];

const arr = Array.from({ length: B }, (_, i) => {
  if (count < num) {
    count += 1;
    return num;
  } else {
    count = 1;
    num += 1;
    return num - 1;
  }
});

const result = arr.slice(A - 1, B).reduce((sum, value) => sum + value, 0);
console.log(result);
