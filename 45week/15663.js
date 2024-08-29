const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);

let result = [];
let visited = new Array(N).fill(false);
let path = [];

function backtrack(depth) {
    if (depth === M) {
        result.push(path.join(' '));
        return;
    }

    let prev = -1;
    for (let i = 0; i < N; i++) {
        if (!visited[i] && numbers[i] !== prev) {
            visited[i] = true;
            path.push(numbers[i]);
            backtrack(depth + 1);
            path.pop();
            visited[i] = false;
            prev = numbers[i];
        }
    }
}

backtrack(0);
console.log(result.join('\n'));
