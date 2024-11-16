const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

const ans = [];
const visited = Array(input + 1).fill(false);
const arr = [];

function dfs(depth) {
    if (depth === input) {
        ans.push(arr.join(' '));
        return;
    }

    for (let i = 1; i <= input; i++) {
        if (!visited[i]) {
            visited[i] = true;
            arr.push(i);
            dfs(depth + 1);
            arr.pop();
            visited[i] = false;
        }
    }
}

dfs(0);
console.log(ans.join('\n'));
