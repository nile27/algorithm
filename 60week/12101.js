const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let results = [];

function backtrack(temp, sum) {
    if (temp === n) {
        results.push(sum.join('+'));
        return;
    }
    if (temp > n) return;

    for (let i = 1; i <= 3; i++) {
        backtrack(temp + i, [...sum, i]);
    }
}

backtrack(0, []);

if (k > results.length) {
    console.log(-1);
} else {
    console.log(results[k - 1]);
}
