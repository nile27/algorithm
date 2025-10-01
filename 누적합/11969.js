const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, Q] = input[0].split(" ").map(Number);

const prefix = Array.from({ length: N + 1 }, () => [0, 0, 0, 0]);

for (let i = 1; i <= N; i++) {
  const breed = Number(input[i]);
  for (let j = 1; j <= 3; j++) {

    prefix[i][j] = prefix[i - 1][j];
  }
  prefix[i][breed] += 1; 
}


let result = "";
for (let i = N + 1; i < N + 1 + Q; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  const count1 = prefix[b][1] - prefix[a - 1][1];
  const count2 = prefix[b][2] - prefix[a - 1][2];
  const count3 = prefix[b][3] - prefix[a - 1][3];
  result += `${count1} ${count2} ${count3}\n`;
}

console.log(result.trim());
