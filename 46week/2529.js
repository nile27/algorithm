const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const k = parseInt(input[0], 10);
const operators = input[1].split(' '); 
const visited = new Array(10).fill(false); 
let maxResult = '';
let minResult = '';

function isValid(x, y, operator) {
    if (operator === '<') return x < y;
    if (operator === '>') return x > y;
    return false;
}

function backtrack(depth, numStr) {
    if (depth === k + 1) {
        if (!maxResult) maxResult = numStr;
        minResult = numStr;
        return;
    }

    for (let i = 0; i <= 9; i++) {
        if (!visited[i]) {
            if (depth === 0 || isValid(numStr[depth - 1], i.toString(), operators[depth - 1])) {
                visited[i] = true;
                backtrack(depth + 1, numStr + i);
                visited[i] = false;
            }
        }
    }
}

backtrack(0, '');

console.log(minResult);
console.log(maxResult);
