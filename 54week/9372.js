const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0], 10);
let result = [];
let index = 1;

let N, M; 
for (let i = 0; i < T; i++) {
    [N, M] = input[index].split(' ').map(Number);
    result.push(N - 1);
    index += M + 1;
}

console.log(result.join('\n'));

