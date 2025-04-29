const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

let name = input.split("").sort();

const palindrome = Array(name.length).fill("");
const left = [];
let index = 0;

for (let i = 0; i < name.length; i++) {
  if (i + 1 < name.length && name[i] === name[i + 1]) {
    palindrome[index] = name[i];
    palindrome[name.length - 1 - index] = name[i];
    index++;
    i++;
  } else {
    left.push(name[i]);
  }
}

if (left.length === 1) {
  palindrome[Math.floor(name.length / 2)] = left[0];
  console.log(palindrome.join(""));
} else if (left.length === 0) {
  console.log(palindrome.join(""));
} else {
  console.log("I'm Sorry Hansoo");
}
