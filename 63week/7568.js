const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const people = input.slice(1).map((line) => line.split(" ").map(Number));
const ranks = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i !== j && people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
      ranks[i]++;
    }
  }
}
console.log(ranks.join(" "));
