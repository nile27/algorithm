const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = parseInt(input[0]);
const K = parseInt(input[1]);
const isPrime = Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}
const knum = Array(N + 1).fill(true);

for (let i = K + 1; i <= N; i++) {
  if (isPrime[i]) {
    for (let j = i; j <= N; j += i) {
      knum[j] = false;
    }
  }
}

let count = 0;
for (let i = 1; i <= N; i++) {
  if (knum[i]) {
    count++;
  }
}

console.log(count);
