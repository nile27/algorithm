const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split(" ");
let leng = input.shift();
let ans = [];
function quad(n, from, to, other) {
  if (n === 0) return;
  quad(n - 1, from, other, to);
  ans.push(`${from} ${to}`);
  quad(n - 1, other, to, from);
}

quad(leng, 1, 3, 2);

console.log(ans.length + "\n" + ans.join("\n"));
