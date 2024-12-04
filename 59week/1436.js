const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;
let number = 666;

while (true) {
    if (String(number).includes('666')) {
        count++;
    }

    if (count === input) {
        console.log(number);
        break;
    }

    number++;
}
