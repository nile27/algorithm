const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [R, C, Q] = input[0].split(' ').map(Number);
const mat = input.slice(1, R + 1).map(line => line.split(' ').map(Number));
const qry = input.slice(R + 1).map(line => line.split(' ').map(Number));

const pSum = Array.from({ length: R + 1 }, () => Array(C + 1).fill(0));
let i = 0, j = 0, x1 = 0, y1 = 0, x2 = 0, y2 = 0, area = 0, total = 0;

for (i = 1; i <= R; i++) {
    for (j = 1; j <= C; j++) {
        pSum[i][j] =
            mat[i - 1][j - 1] +
            pSum[i - 1][j] +
            pSum[i][j - 1] -
            pSum[i - 1][j - 1];
    }
}

const res = [];
for (let q of qry) {
    [x1, y1, x2, y2] = q;
    total =
        pSum[x2][y2] -
        pSum[x1 - 1][y2] -
        pSum[x2][y1 - 1] +
        pSum[x1 - 1][y1 - 1];
    area = (x2 - x1 + 1) * (y2 - y1 + 1);
    res.push(Math.floor(total / area));
}

console.log(res.join('\n'));
