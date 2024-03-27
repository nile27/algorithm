const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [N, M] = [
  input[1]
    .split(" ")
    .map(Number)
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {}),
  input[3].split(" ").map(Number),
];
let ans = [];

for (let i of M) {
  N[i] ? ans.push(N[i]) : ans.push(0);
}
console.log(ans.join(" "));
