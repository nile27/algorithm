const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

let safe = 1;
const dir = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
];

const bfs = (x, y, visited, rain) => {
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length) {
        const [cx, cy] = queue.shift();

        for (const [dx, dy] of dir) {
            const nx = cx + dx;
            const ny = cy + dy;

            if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny] && grid[nx][ny] > rain) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
};

for (let rain = 1; rain <= 100; rain++) {
    let zone = 0;
    const visited = Array.from({ length: N }, () => Array(N).fill(false));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j] && grid[i][j] > rain) {
                bfs(i, j, visited, rain);
                zone++;
            }
        }
    }

    safe = Math.max(safe, zone);
}

console.log(safe);
