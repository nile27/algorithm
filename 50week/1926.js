const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.split(' ').map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
];

function bfs(x, y) {
    let area = 1;
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length) {
        const [cx, cy] = queue.shift();
        
        for (const [dx, dy] of directions) {
            const nx = cx + dx;
            const ny = cy + dy;
            
            if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny] && grid[nx][ny] === 1) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                area++;
            }
        }
    }

    return area;
}

let count = 0;
let maxArea = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (grid[i][j] === 1 && !visited[i][j]) {
            maxArea = Math.max(maxArea, bfs(i, j));
            count++;
        }
    }
}

console.log(count);
console.log(maxArea);
