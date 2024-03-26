const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [N, M] = [input[1].split(" "), input[3].split(" ")];
const objN = {};
N.forEach((item) => (objN[item] = true));
let ans = [];

for (let i of M) {
  objN[i] ? ans.push(1) : ans.push(0);
}
console.log(ans.join("\n"));
