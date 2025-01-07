const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = parseInt(input[0]);
const points = input.slice(1).map((line) => line.split(" ").map(Number));

let max = 0;
let area = 0;

const triFunc = (p1, p2, p3) => {
  return Math.abs(
    (p1[0] * (p2[1] - p3[1]) +
      p2[0] * (p3[1] - p1[1]) +
      p3[0] * (p1[1] - p2[1])) /
      2
  );
};

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      area = triFunc(points[i], points[j], points[k]);
      max = Math.max(max, area);
    }
  }
}

console.log(max.toFixed(1));
