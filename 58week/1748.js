const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

let result = 0;
let len = 1;
let base = 10;

while (input >= base) {
    result += (base - base / 10) * len;
    base *= 10;
    len++;
}
result += (input - base / 10 + 1) * len;

console.log(result);
