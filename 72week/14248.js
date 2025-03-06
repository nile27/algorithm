const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const jump = input[1].split(" ").map(Number);
const s = Number(input[2]) - 1;

const visited = new Array(n).fill(false);
let count = 0;

function dfs(now) {
  if (now < 0 || now >= n || visited[now]) return;

  visited[now] = true;
  count++;

  dfs(now + jump[now]);
  dfs(now - jump[now]);
}

dfs(s);
console.log(count);
