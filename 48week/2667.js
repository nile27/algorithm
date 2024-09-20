const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const map = input.slice(1).map(line => line.split('').map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
];
let complexCounts = [];

function dfs(x, y) {
    let count = 1;
    visited[x][y] = true;

    for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny] && map[nx][ny] === 1) {
            count += dfs(nx, ny);
        }
    }

    return count;
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (map[i][j] === 1 && !visited[i][j]) {
            complexCounts.push(dfs(i, j));
        }
    }
}

complexCounts.sort((a, b) => a - b);

console.log(complexCounts.length);
console.log(complexCounts.join('\n'));
