const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let count0 = 0; 
let count1 = 0; 

if (input[0] === '0') count0++;
else count1++;

for (let i = 1; i < input.length; i++) {
    if (input[i] !== input[i - 1]) {
        if (input[i] === '0') count0++;
        else count1++;
    }
}
console.log(Math.min(count0, count1));
