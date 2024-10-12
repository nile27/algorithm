const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const Marr = input[1].split(" ").map(Number).sort((a, b) => a - b);

let result = [];

function backtrack(depth, arr) {
    if (arr.length === M) {
        result.push(arr.join(" "));
        return;
    }

    for (let i = 0; i < N; i++) {
        arr.push(Marr[i]);
        backtrack(depth + 1, arr);
        arr.pop();
    }
}

backtrack(0, []);

console.log(result.join("\n"));
