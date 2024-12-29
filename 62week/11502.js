const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
const testCase = input.slice(1).map(Number);

const max = Math.max(...testCase);

const isPrime = Array(max + 1).fill(false);
const primeList = [];
let primeCnt = 0;

function solve(limit) {
  for (let i = 2; i * i <= limit; i++) {
    if (!isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = true;
      }
    }
  }

  for (let i = 2; i <= limit; i++) {
    if (!isPrime[i]) {
      primeList[primeCnt++] = i;
    }
  }
}

solve(max);

const results = [];

testCase.forEach((num) => {
  let found = false;

  if (num > 4 && !isPrime[num - 4]) {
    results.push(`2 2 ${num - 4}`);
    return;
  }

  for (let j = 0; j < primeCnt; j++) {
    for (let k = j; k < primeCnt; k++) {
      for (let u = k; u < primeCnt; u++) {
        if (primeList[j] + primeList[k] + primeList[u] === num) {
          results.push(`${primeList[j]} ${primeList[k]} ${primeList[u]}`);
          found = true;
          break;
        }
      }
      if (found) break;
    }
    if (found) break;
  }

  if (!found) {
    results.push("0");
  }
});

console.log(results.join("\n"));
