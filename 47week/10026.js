const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const grid = input.slice(1).map(line => line.split(''));

const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
];

function bfs(x, y, visited, isRGBlind) {
    const queue = [[x, y]];
    const color = grid[x][y];
    visited[x][y] = true;

    while (queue.length > 0) {
        const [cx, cy] = queue.shift();

        for (const [dx, dy] of directions) {
            const nx = cx + dx;
            const ny = cy + dy;

            if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny]) {
                if (isRGBlind) {
                    if ((color === 'R' || color === 'G') && (grid[nx][ny] === 'R' || grid[nx][ny] === 'G')) {
                        visited[nx][ny] = true;
                        queue.push([nx, ny]);
                    } else if (color === 'B' && grid[nx][ny] === 'B') {
                        visited[nx][ny] = true;
                        queue.push([nx, ny]);
                    }
                } else {
                    if (grid[nx][ny] === color) {
                        visited[nx][ny] = true;
                        queue.push([nx, ny]);
                    }
                }
            }
        }
    }
}

function countRegions(isRGBlind) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let regionCount = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) {
                bfs(i, j, visited, isRGBlind);
                regionCount++;
            }
        }
    }

    return regionCount;
}

const normalCount = countRegions(false);
const rgBlindCount = countRegions(true);

console.log(normalCount, rgBlindCount);
