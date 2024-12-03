const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const kits = input[1].split(' ').map(Number);

let count = 0;
const visited = Array(N).fill(false);

function backtrack(day, weight) {
    if (day === N) {
        count++;
        return;
    }

    for (let i = 0; i < N; i++) {
        if (!visited[i] && weight + kits[i] - K >= 500) {
            visited[i] = true;
            backtrack(day + 1, weight + kits[i] - K);
            visited[i] = false;
        }
    }
}

backtrack(0, 500);

console.log(count);
