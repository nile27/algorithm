const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
for (let i = 1; i <= M; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

function dfs(node) {
    visited[node] = true;
    
    for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor);
        }
    }
}

let count = 0;
for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        dfs(i);
        count++;
    }
}

console.log(count);
