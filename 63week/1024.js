const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const N = BigInt(input[0]);
const L = Number(input[1]);
let x = -1n;
let temp = 0n;
let result = [];
let i = L;
for (; i <= 100; i++) {
  temp = N - BigInt(i * (i - 1)) / 2n;
  if (temp < 0n) break;
  if (temp % BigInt(i) === 0n) {
    x = temp / BigInt(i);
    if (x >= 0n) break;
  }
}
if (x === -1n || x < 0n) {
  console.log(-1);
} else {
  result = Array.from({ length: i }, (_, idx) => (x + BigInt(idx)).toString());
  console.log(result.join(" "));
}
