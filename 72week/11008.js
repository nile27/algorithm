const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const T = Number(input[0]);
let result = [];
let S = "";
let P = "";
let count = 0;
let remined = 0;
let answer = 0;

for (let i = 1; i <= T; i++) {
  [S, P] = input[i].split(" ");

  count = S.split(P).length - 1;
  remined = S.length - count * P.length;
  answer = count + remined;

  result.push(answer);
}

console.log(result.join("\n"));
