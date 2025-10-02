const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let n = input;
let bag = 0;

while (n >= 0) {
    if (n % 5 === 0) {
        bag += Math.floor(n / 5);
        console.log(bag);
        break;
    }
    n -= 3;
    bag += 1;
}

if (n < 0) {
    console.log(-1);
}
