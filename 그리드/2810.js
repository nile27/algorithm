const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const info = input[1].trim();

let count = 0;

for (let i = 0; i < info.length - 1; i++) {
  if (info[i] === 'L' && info[i + 1] === 'L') {
    count++;
    i++; 
  }
}

if (count <= 1) {
  console.log(N);
} else {
  console.log(N - count + 1);
}
