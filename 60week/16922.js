const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

const values = [1, 5, 10, 50];
const set = new Set();

function backtrack(idx, count, sum) {
    if (count === input) {
        set.add(sum);
        return;
    }

    for (let i = idx; i < values.length; i++) {
        backtrack(i, count + 1, sum + values[i]);
    }
}

backtrack(0, 0, 0);

console.log(set.size);
