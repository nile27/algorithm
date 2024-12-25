const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const prices = input.slice(1).map((line) => line.split(" ").map(Number));

let package = Infinity;
let single = Infinity;

let packagePrice = 0;
let singlePrice = 0;

for (let i = 0; i < M; i++) {
  [packagePrice, singlePrice] = prices[i];
  package = Math.min(package, packagePrice);
  single = Math.min(single, singlePrice);
}

const result = Math.min(
  Math.ceil(N / 6) * package,
  N * single,
  Math.floor(N / 6) * package + (N % 6) * single
);

console.log(result);
