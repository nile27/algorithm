const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = [];
const open = { '(': ')', '[': ']' };

for (let line of input) {
    if (line === ".") break;

    const stack = [];
    let isTrue = true;

    for (let char of line) {
        if (char === '(' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === ']') {
            if (stack.length === 0 || open[stack.pop()] !== char) {
                isTrue = false;
                break;
            }
        }
    }

    if (isTrue && stack.length === 0) {
        result.push("yes");
    } else {
        result.push("no");
    }
}

console.log(result.join('\n'));
