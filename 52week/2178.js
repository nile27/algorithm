const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const maze = input.slice(1).map(line => line.split('').map(Number));

const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const queue = [[0, 0]];
visited[0][0] = true;

while (queue.length) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of dir) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && ny >= 0 && nx < N && ny < M && maze[nx][ny] === 1 && !visited[nx][ny]) {
            visited[nx][ny] = true;
            maze[nx][ny] = maze[x][y] + 1;
            queue.push([nx, ny]);
        }
    }
}

console.log(maze[N - 1][M - 1]);
