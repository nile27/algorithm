const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const K = parseInt(input[1], 10);
const cards = input.slice(2).map(Number);

const set = new Set();
const visited = Array(N).fill(false);

function backtrack(count, number) {
    if (count === K) {
        set.add(number);
        return;
    }

    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            backtrack(count + 1, number + cards[i].toString());
            visited[i] = false;
        }
    }
}

backtrack(0, '');

console.log(set.size);
