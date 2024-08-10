const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numComputers = parseInt(input[0]);
const numConnections = parseInt(input[1]);
const graph = Array.from({ length: numComputers + 1 }, () => []);

for (let i = 2; i < input.length; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

const visited = Array(numComputers + 1).fill(false);

function bfs(start) {
    const queue = [start];
    visited[start] = true;
    let count = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        for (const neighbor of graph[current]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
                count++;
            }
        }
    }

    return count;
}

console.log(bfs(1));
