const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, house] = [Number(input[0]), input[1].split(" ").map(Number)];

house.sort((a, b) => a - b);
if (N === 1) console.log(house[0]);
else {
    N % 2 === 0 ? console.log(house[(N / 2)-1]) : console.log(house[Math.floor(N / 2) ]);
}
