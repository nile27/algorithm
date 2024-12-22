const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input.shift());
const arr = input.map((v) => v.split(' ').map(Number));
let visited = Array(N + 1).fill(false);
let graph = [...Array(N + 1)].map(() => []);
let answer = [];

arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});


function dfs (v)  {
  visited[1] = true; 
  for (const i of graph[v]) {
    if (!visited[i]) {
      visited[i] = true;
      answer[i] = v;
      dfs(i);
    }
  }
};

dfs(1);
console.log(answer.slice(2).join('\n'));
