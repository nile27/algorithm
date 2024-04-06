const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.pop();
const testCase = input.length;
let leng = 0;
let arr = 0;
const dfs = (s) => {
  if (s.length === 6) return console.log(s.join(" "));

  for (const i of arr) {
    if (!s.length) {
      s.push(i);
      dfs(s);
      s.pop();
    } else if (parseInt(s[s.length - 1]) < parseInt(i)) {
      s.push(i);
      dfs(s);
      s.pop();
    }
  }
};

for (let i = 0; i < testCase; i += 1) {
  arr = input[i].split(" ");
  leng = Number(arr.shift());
  dfs([]);
  if (testCase - 1 !== i) console.log(" ");
}
