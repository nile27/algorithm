const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const ing = input.slice(1).map(line => line.split(' ').map(Number));

let minDiff = Infinity;

function backtracking(idx, s, b, cnt) {
    if (idx === N) {
        if (cnt > 0) {
            const diff = Math.abs(s - b);
            minDiff = Math.min(minDiff, diff);
        }
        return;
    }

    backtracking(idx + 1, s * ing[idx][0], b + ing[idx][1], cnt + 1);
    backtracking(idx + 1, s, b, cnt);
}

backtracking(0, 1, 0, 0);

console.log(minDiff);
