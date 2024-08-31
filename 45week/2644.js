const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const n = parseInt(input[0], 10);
const [person1, person2] = input[1].split(' ').map(Number);
const m = parseInt(input[2], 10);

const relations = Array.from({ length: n + 1 }, () => []);
for (let i = 3; i < 3 + m; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    relations[x].push(y);
    relations[y].push(x);
}

function bfs(start, target) {
    const visited = Array(n + 1).fill(false);
    const queue = [[start, 0]];

    visited[start] = true;

    while (queue.length > 0) {
        const [current, depth] = queue.shift();

        if (current === target) {
            return depth;
        }

        for (const next of relations[current]) {
            if (!visited[next]) {
                visited[next] = true;
                queue.push([next, depth + 1]);
            }
        }
    }

    return -1;
}

console.log(bfs(person1, person2));
