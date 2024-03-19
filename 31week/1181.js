const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.shift();

let set = Array.from(new Set([...input]));

let ans = set.sort((a, b) => {
  if (a.length === b.length) {
    let [x, y] = [a.toLowerCase(), b.toLowerCase()];
    for (let i = 0; i < a.length; i++) {
      if (x[i].charCodeAt() < y[i].charCodeAt()) {
        return -1;
      } else if (x[i].charCodeAt() > y[i].charCodeAt()) {
        return 1;
      }
    }
  } else {
    return a.length - b.length;
  }
});

console.log(ans.join("\n"));
