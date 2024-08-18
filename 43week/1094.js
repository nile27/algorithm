const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;
let length = input;

while (length > 0) {
    if (length % 2 === 1) {
        count++;
    }
    length = Math.floor(length / 2);
}

console.log(count);
