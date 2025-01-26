const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = parseInt(input[0], 10);
const wordsarr = input.slice(1, N + 1);

const resultSet = new Set();

for (const item of wordsarr) {
  let isUnique = true;
  for (const word of resultSet) {
    if (word.length === item.length && (word + word).includes(item)) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    resultSet.add(item);
  }
}

console.log(resultSet.size);
