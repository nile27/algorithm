const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const set = new Set(["ChongChong"]);

let [a, b] = ["", ""];

for (let i = 1; i <= N; i++) {
  [a, b] = input[i].split(" ");

  if (set.has(a) || set.has(b)) {
    set.add(a);
    set.add(b);
  }
}

console.log(set.size);
