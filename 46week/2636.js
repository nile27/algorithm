const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(line => line.split(' ').map(Number));

const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
];

function bfs() {
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny]) {
                if (board[nx][ny] === 0) {
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                } else if (board[nx][ny] === 1) {
                    visited[nx][ny] = true;
                    board[nx][ny] = 2;  
                }
            }
        }
    }
}

function meltCheese() {
    let melted = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] === 2) {
                board[i][j] = 0;
                melted++;
            }
        }
    }
    return melted;
}

let time = 0;
let lastMelted = 0;

while (true) {
    bfs();
    const melted = meltCheese();
    if (melted === 0) break;
    lastMelted = melted;
    time++;
}

console.log(time);
console.log(lastMelted);
