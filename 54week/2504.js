const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let stack = [];
let temp = 1;
let result = 0;

for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === '(') {
        stack.push(char);
        temp *= 2;
    } else if (char === '[') {
        stack.push(char);
        temp *= 3;
    } else if (char === ')') {
        if (!stack.length || stack[stack.length - 1] !== '(') {
            result = 0;
            break;
        }
        if (input[i - 1] === '(') {
            result += temp;
        }
        stack.pop();
        temp /= 2;
    } else if (char === ']') {
        if (!stack.length || stack[stack.length - 1] !== '[') {
            result = 0;
            break;
        }
        if (input[i - 1] === '[') {
            result += temp;
        }
        stack.pop();
        temp /= 3;
    }
}

console.log(stack.length ? 0 : result);
