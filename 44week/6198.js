const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0], 10);
const heights = input.slice(1).map(Number);

let count = 0;
const stack = [];

for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1] <= heights[i]) {
        stack.pop();
    }
    count += stack.length;
    stack.push(heights[i]);
}

console.log(count);
