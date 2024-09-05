const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

const result = (A * B * C).toString(); 
const count = new Array(10).fill(0);   
for (let i = 0; i < result.length; i++) {
    count[parseInt(result[i])]++;
}

console.log(count.join('\n'));  
