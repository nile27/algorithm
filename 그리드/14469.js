const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const cows = input
  .slice(1)
  .map((line) => line.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

let currentTime = 0,
  arrival = 0,
  duration = 0;

for (let i = 0; i < N; i++) {
  [arrival, duration] = cows[i];
  currentTime = Math.max(currentTime, arrival) + duration;
}

console.log(currentTime);
