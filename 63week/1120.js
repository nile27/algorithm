const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const A = input[0];
const B = input[1];

let minimum = Infinity;
let i = 0,
  j = 0,
  count = 0;

for (i = 0; i <= B.length - A.length; i++) {
  count = 0;
  for (j = 0; j < A.length; j++) {
    if (A[j] !== B[i + j]) {
      count++;
    }
  }
  minimum = Math.min(minimum, count);
}

console.log(minimum);
