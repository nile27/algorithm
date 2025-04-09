const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const operators = input[2].split(' ').map(Number);

let maxResult = -Infinity;
let minResult = Infinity;

function dfs(depth, current, add, sub, mul, div) {
    if (depth === N) {
        maxResult = Math.max(maxResult, current);
        minResult = Math.min(minResult, current);
        return;
    }

    if (add > 0) {
        dfs(depth + 1, current + numbers[depth], add - 1, sub, mul, div);
    }
    if (sub > 0) {
        dfs(depth + 1, current - numbers[depth], add, sub - 1, mul, div);
    }
    if (mul > 0) {
        dfs(depth + 1, current * numbers[depth], add, sub, mul - 1, div);
    }
    if (div > 0) {
        dfs(
            depth + 1,
            current < 0
                ? -Math.floor(-current / numbers[depth])
                : Math.floor(current / numbers[depth]),
            add,
            sub,
            mul,
            div - 1
        );
    }
}

dfs(1, numbers[0], operators[0], operators[1], operators[2], operators[3]);

console.log(`${maxResult}\n${minResult}`)
