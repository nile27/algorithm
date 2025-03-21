const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M, R] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
const order = Array(N + 1).fill(0);
let cnt = 1;
let [u, v] = [0, 0];

function dfs(node) {
  visited[node] = true;
  order[node] = cnt++;

  for (let next of graph[node]) {
    if (!visited[next]) dfs(next);
  }
}

for (let i = 1; i <= M; i++) {
  [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => b - a);
}

dfs(R);

console.log(order.slice(1).join("\n"));
