let fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().split("\n");

let [NM, trees] = input;
let [N, M] = NM.split(" ").map(Number);
trees = trees.split(" ").map(Number);

let left = 0;
let right = Math.max(...trees);
let result = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let sum = trees.reduce((acc, tree) => {
    if (tree > mid) return acc + (tree - mid);
    return acc;
  }, 0);

  if (sum >= M) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
console.log(result);
