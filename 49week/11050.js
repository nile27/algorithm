const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const N = input[0];
const K = input[1];

function fact(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
const bin = fact(N) / (fact(K) * fact(N - K));

console.log(bin);
