const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);

const whiteFirstPattern = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW'
];

const blackFirstPattern = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB'
];

function countRepaints(x, y, pattern) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[x + i][y + j] !== pattern[i][j]) {
                count++;
            }
        }
    }
    return count;
}

let minRepaints = Infinity;

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
        const whiteRepaints = countRepaints(i, j, whiteFirstPattern);
        const blackRepaints = countRepaints(i, j, blackFirstPattern);
        minRepaints = Math.min(minRepaints, whiteRepaints, blackRepaints);
    }
}

console.log(minRepaints);
