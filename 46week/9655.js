const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input, 10);

if (N % 2 === 1) {
    console.log("SK");
} else {
    console.log("CY");
}
