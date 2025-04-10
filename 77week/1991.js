const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const tree = {};

let pre = "",
  mid = "",
  post = "";

for (let i = 0; i < N; i++) {
  [root, left, right] = input[i].split(" ");
  tree[root] = { left, right };
}

function treeCycle(node) {
  if (node === ".") return;

  pre += node;

  treeCycle(tree[node].left);
  mid += node;

  treeCycle(tree[node].right);
  post += node;
}

treeCycle("A");

console.log(pre);
console.log(mid);
console.log(post);
