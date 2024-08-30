const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);

let result = [];
let path = [];

function backtrack(start, depth) {
    if (depth === M) {
        result.push(path.join(' '));
        return;
    }
    for (let i = start; i < N; i++) {
        path.push(numbers[i]);
        backtrack(i, depth + 1);
        path.pop();
    }
}

backtrack(0, 0);

console.log(result.join('\n'));
