const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, P] = input[0].split(' ').map(Number);
const note = input.slice(1).map(line => line.split(' ').map(Number));

const arr = Array.from({ length: 7 }, () => []);
let count = 0;

let line = 0, prat = 0, stack = null;

for (let i = 0; i < N; i++) {
    [line, prat] = note[i];
    stack = arr[line];

    while (stack.length > 0 && stack[stack.length - 1] > prat) {
        stack.pop();
        count++;
    }

    if (stack.length === 0 || stack[stack.length - 1] !== prat) {
        stack.push(prat);
        count++;
    }
}

console.log(count);
