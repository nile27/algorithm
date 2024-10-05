const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
let result = 0;

for (let i = 1; i <= N; i++) {
    const stack = [];
    const word = input[i];

    for (let j = 0; j < word.length; j++) {
        if (stack.length && stack[stack.length - 1] === word[j]) {
            stack.pop();
        } else {
            stack.push(word[j]);
        }
    }

    if (stack.length === 0) {
        result++;
    }
}

console.log(result);
