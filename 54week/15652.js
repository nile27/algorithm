const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const N = parseInt(input[0], 10);
const M = parseInt(input[1], 10);

let res = [];
let result = [];

function dfs(start, depth) {
    if (depth === M) {
        res.push(result.join(' '));
        return;
    }

    for (let i = start; i <= N; i++) {
        result.push(i);
        dfs(i, depth + 1);
        result.pop();
    }
}

dfs(1, 0);
console.log(res.join('\n'));
