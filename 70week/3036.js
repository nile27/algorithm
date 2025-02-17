const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const ring = input[1].split(" ").map(Number);
const startRing = ring[0];

let radius = 0;
let div = 0;

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

for (let i = 1; i < N; i++) {
  radius = ring[i];
  div = gcd(startRing, radius);

  console.log(`${startRing / div}/${radius / div}`);
}
