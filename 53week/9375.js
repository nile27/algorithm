const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0], 10);
let idx = 1;
let res = [];

for (let i = 0; i < T; i++) {
    const n = parseInt(input[idx], 10);
    let clothes = {};

    for (let j = idx + 1; j <= idx + n; j++) {
        const [_, type] = input[j].split(' ');

        clothes[type] = (clothes[type] || 0) + 1;
    }

    let comb = 1;
    for (let type in clothes) {
        comb *= (clothes[type] + 1);
    }

    res.push(comb - 1);
    idx += n + 1;
}

console.log(res.join('\n'));
