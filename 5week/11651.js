const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const leng = Number(input.shift());
let arr = input.map((item) => {
  let arr = item.split(" ");
  return [Number(arr[0]), Number(arr[1])];
});

console.log(
  arr
    .sort((a, b) => {
      return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1];
    })
    .join("\n")
    .replaceAll(",", " ")
    .trim()
);
