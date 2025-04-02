const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const K = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const treeArr = Array.from({ length: K }, () => []);

function tree(depth, arr) {
  if (arr.length === 0) return;

  const mid = Math.floor(arr.length / 2);
  treeArr[depth].push(arr[mid]);

  tree(depth + 1, arr.slice(0, mid));
  tree(depth + 1, arr.slice(mid + 1));
}

tree(0, nums);

for (let depth of treeArr) {
  console.log(depth.join(" "));
}
