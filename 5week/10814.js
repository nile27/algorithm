const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.shift();
let arr = input.map((item) => {
  item = item.split(" ");
  return [Number(item[0]), item[1]];
});

console.log(
  arr
    .sort((a, b) => a[0] - b[0])
    .join("\n")
    .replaceAll(",", " ")
    .trim()
);
