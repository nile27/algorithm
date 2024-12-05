const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const board = input.map(line => line.split(' '));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const numbers = new Set();

function dfs(x, y, depth, num) {
    if (depth === 6) {
        numbers.add(num);
        return;
    }

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
            dfs(nx, ny, depth + 1, num + board[nx][ny]);
        }
    }
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        dfs(i, j, 0, '');
    }
}

console.log(numbers.size);
