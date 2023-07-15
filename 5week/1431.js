const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
input.shift();

let arr = input.sort((a, b) => {
  if (a.length === b.length) {
    let A = a
      .split("")
      .map((item) => {
        return !isNaN(Number(item)) ? Number(item) : 0;
      })
      .reduce((a, b) => a + b);

    let B = b
      .split("")
      .map((item) => {
        return !isNaN(Number(item)) ? Number(item) : 0;
      })
      .reduce((a, b) => a + b);

    if (A === B) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return a.charCodeAt(i) - b.charCodeAt(i);
      }
    } else {
      return A - B;
    }
  } else {
    return a.length - b.length;
  }
});
console.log(arr.join("\n").trim());
