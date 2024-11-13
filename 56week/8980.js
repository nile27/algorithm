const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, C] = input[0].split(' ').map(Number);
const M = parseInt(input[1]);
const boxArr = input.slice(2).map(line => line.split(' ').map(Number));

    boxArr.sort((a, b) => a[1] - b[1]);

let total = 0;
let city = Array(N + 1).fill(0);
let [from, to, box, max, space] = [0,0,0,0,0];

for (let i = 0; i < M; i++) {
     [from, to, box] = boxArr[i];
      max = 0
    for (let j = from; j < to; j++) {
          max = Math.max(max, city[j]);
    }

    space = Math.min(C - max, box);

    for (let j = from; j < to; j++) {
        city[j] += space;
    }

      total += space;
}

console.log(total);
