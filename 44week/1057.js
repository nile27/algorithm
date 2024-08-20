const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ');

let n = parseInt(input[0]);
let a = parseInt(input[1]);
let b = parseInt(input[2]);

let round = 0;

while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
}

console.log(round);
