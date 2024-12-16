const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let bCopy = b; 
let count = 1; 

while (bCopy > a) {
    if (bCopy % 2 === 0) {
        bCopy = bCopy / 2; 
    } else if (bCopy % 10 === 1) {
        bCopy = Math.floor(bCopy / 10); 
    } else {
        count = -1; 
        break;
    }
    count++;
}

if (bCopy !== a) {
    count = -1; 
}

console.log(count);
