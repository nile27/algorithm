const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0])
const directions = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
];

function bfs(l, startX, startY, targetX, targetY) {
    const visited = Array.from({ length: l }, () => Array(l).fill(false));
    const queue = [[startX, startY, 0]];
    visited[startX][startY] = true;

    while (queue.length > 0) {
        const [x, y, count] = queue.shift();

        if (x === targetX && y === targetY) {
            return count;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < l && ny < l && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]);
            }
        }
    }
}

let idx = 1;
let results = [];

for (let t = 0; t < T; t++) {
    const l = parseInt(input[idx], 10);
    const [startX, startY] = input[idx + 1].split(' ').map(Number);
    const [targetX, targetY] = input[idx + 2].split(' ').map(Number);
    idx += 3;

    if (startX === targetX && startY === targetY) {
        results.push(0);
    } else {
        results.push(bfs(l, startX, startY, targetX, targetY));
    }
}

console.log(results.join('\n'));
