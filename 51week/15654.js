const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number).sort((a, b) => a - b);

let result = [];
let visited = Array(N).fill(false);
let output = [];

function backtrack(depth) {
    if (depth === M) {
        result.push(output.join(" "));
        return;
    }

    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            output.push(numbers[i]);
            backtrack(depth + 1);
            visited[i] = false;
            output.pop();
        }
    }
}

backtrack(0);
console.log(result.join("\n"));
