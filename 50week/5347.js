const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0], 10);
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

let result = [];

for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    result.push(lcm(a, b));
}

console.log(result.join('\n'));
