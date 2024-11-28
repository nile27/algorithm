const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let open = 0;
let close = 0;
for (let char of input) {
    if (char === '(') {
        open++;
    } else if (char === ')') {
        if (open > 0) {
            open--; 
        } else {
            close++; 
        }
    }
}

console.log(open + close);
