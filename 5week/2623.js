const fs = require("fs");
const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));
const shift = input.shift().map(Number);
if (shift[1] === 0 || shift[0] === 0) return console.log(0);
let indegree = Array.from({ length: shift[0] }, () => []);
let countArr = Array(shift[0]).fill(0);
let ans = [];

function answersort() {
  let quene = [];
  countArr.map((item, idx) => {
    return item === 0 ? quene.push(idx + 1) : null;
  });
  while (quene.length) {
    let zero = quene.shift();
    indegree[zero - 1].forEach((item) => {
      countArr[item - 1]--;
      countArr[item - 1] === 0 ? quene.push(item) : null;
    });
    ans.push(zero);
  }
}

for (let i = 0; i < input.length; i++) {
  input[i].shift();
  for (let j = 0; j < input[i].length - 1; j++) {
    indegree[Number(input[i][j]) - 1].push(Number(input[i][j + 1]));
    countArr[Number(input[i][j + 1]) - 1]++;
  }
}

answersort();
if (Math.max(...countArr) === 0) console.log(ans.join(" "));
else console.log(0);
