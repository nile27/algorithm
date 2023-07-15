const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));
const shift = input.shift().map(Number);
let indegree = Array.from({ length: shift[0] }, () => []);
let countArr = Array(Number(shift[0])).fill(-1);
let ans = [];

function answersort(count) {
  let quene = [];
  countArr.map((item, idx) => {
    return item === count ? quene.push(idx + 1) : null;
  });
  while (quene.length) {
    let zero = quene.shift();
    indegree[zero - 1].forEach((item) => {
      countArr[item - 1]--;
      countArr[item - 1] === count ? quene.push(item) : null;
    });
    ans.push(zero);
  }
}

for (let i = 0; i < input.length; i++) {
  indegree[Number(input[i][0]) - 1].push(Number(input[i][1]));
  countArr[Number(input[i][1]) - 1] === -1
    ? (countArr[Number(input[i][1]) - 1] += 2)
    : countArr[Number(input[i][1]) - 1]++;
}

console.log(ans.join(" "));
