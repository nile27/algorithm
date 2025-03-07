const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const T = Number(input[0]);
let test = 1;
let [J, N] = [0, 0];
let testCase = 1;

let boxTable = [];
let boxwidth = [];
let resultCount = 0;

while (testCase <= T) {
  [J, N] = input[test].split(" ").map(Number);

  for (let box = 1; box <= N; box++) {
    boxwidth = input[test + box].split(" ").map(Number);
    boxTable.push(boxwidth[0] * boxwidth[1]);
    boxTable.sort((a, b) => b - a);
  }
  for (let i of boxTable) {
    J -= i;
    resultCount++;
    if (J <= 0) {
      console.log(resultCount);
      resultCount = 0;
      break;
    }
  }
  boxTable.length = 0;
  test += N + 1;
  testCase++;
}
