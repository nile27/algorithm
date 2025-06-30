const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const T = Number(input.shift());

let [N, arr] = [0, []];

let temp = 0;
let treeArr = [];
for (let testCase = 0; testCase < input.length; testCase += 2) {
  [N, arr] = [
    Number(input[testCase]),
    input[testCase + 1].split(" ").map(Number),
  ];
  temp = 0;
  arr.sort((a, b) => b - a);
  treeArr = Array.from({ length: N }, () => 0);
  for (let i = 0; i < arr.length - 2; i++) {
    temp = Math.max(
      temp,
      Math.abs(arr[i] - arr[i + 2]),
      Math.abs(arr[i + 1] - arr[i])
    );
  }
  temp = Math.max(temp, Math.abs(arr[N - 1] - arr[N - 2]));
  console.log(temp);
}
