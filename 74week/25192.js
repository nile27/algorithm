const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const set = new Set();
let count = 0;
let user = "";

for (let i = 1; i <= N; i++) {
  user = input[i];

  if (user === "ENTER") {
    set.clear();
  } else if (!set.has(user)) {
    set.add(user);
    count++;
  }
}

console.log(count);
