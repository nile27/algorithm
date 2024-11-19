const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const num = input[1].split(' ').map(Number);
const oper = input[2].split(' ').map(Number);

let max = -Infinity;
let min = Infinity;

function dfs(depth, current, add, sub, mul, div) {
    if (depth === N) {
        max = Math.max(max, current);
        min = Math.min(min, current);
        return;
    }
    if (add > 0) {
        dfs(depth + 1, current + num[depth], add - 1, sub, mul, div);
    }
    if (sub > 0) {
        dfs(depth + 1, current - num[depth], add, sub - 1, mul, div);
    }
    if (mul > 0) {
        dfs(depth + 1, current * num[depth], add, sub, mul - 1, div);
    }
    if (div > 0) {
        dfs(
            depth + 1,
            current < 0
                ? -Math.floor(-current / num[depth])
                : Math.floor(current / num[depth]),
            add,
            sub,
            mul,
            div - 1
        );
    }
}

dfs(1, num[0], oper[0], oper[1], oper[2], oper[3]);
console.log(max);
console.log(min);
