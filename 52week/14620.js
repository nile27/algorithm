const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const garden = input.slice(1).map(line => line.split(' ').map(Number));

const dir = [
    [0, 0],
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];

let minCost = Infinity;

function check(x, y, visited) {
    for (const [dx, dy] of dir) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= N || ny >= N || visited[nx][ny]) {
            return false;
        }
    }
    return true;
}

function cost(x, y) {
    let sum = 0;
    for (const [dx, dy] of dir) {
        sum += garden[x + dx][y + dy];
    }
    return sum;
}

function find(depth, total, visited) {
    if (depth === 3) {
        minCost = Math.min(minCost, total);
        return;
    }

    for (let i = 1; i < N - 1; i++) {
        for (let j = 1; j < N - 1; j++) {
            if (check(i, j, visited)) {
                let sum = cost(i, j);
                for (const [dx, dy] of dir) {
                    visited[i + dx][j + dy] = true;
                }
                
                find(depth + 1, total + sum, visited);
                
                for (const [dx, dy] of dir) {
                    visited[i + dx][j + dy] = false;
                }
            }
        }
    }
}

const visited = Array.from({ length: N }, () => Array(N).fill(false));
find(0, 0, visited);

console.log(minCost);
