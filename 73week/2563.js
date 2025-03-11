const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const paperArr = input.slice(1).map((item) => item.split(" ").map(Number));
const visitSet = new Set();

for (let paper of paperArr) {
  for (let width = paper[0]; width < paper[0] + 10; width++) {
    for (let height = paper[1]; height < paper[1] + 10; height++) {
      visitSet.add(`${width} ${height}`);
    }
  }
}

console.log(visitSet.size);
