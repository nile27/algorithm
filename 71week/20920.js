const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const words = input.slice(1);
const wordCount = {};

let word = "";

for (let i = 0; i < N; i++) {
  word = words[i];
  if (word.length >= M) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
}

const sortedWords = Object.keys(wordCount).sort((a, b) => {
  if (wordCount[b] !== wordCount[a]) {
    return wordCount[b] - wordCount[a];
  } else if (b.length !== a.length) {
    return b.length - a.length;
  } else {
    return a.localeCompare(b);
  }
});

console.log(sortedWords.join("\n"));
