const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const S = input.split("");
const count = {};
S.forEach((char) => {
  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
});

function dfs(preWord, picked) {
  if (picked === S.length) {
    return 1;
  }
  let answer = 0;
  for (const key in count) {
    if (preWord === key) continue;
    if (count[key] === 0) continue;
    count[key]--;
    answer += dfs(key, picked + 1);
    count[key]++;
  }
  return answer;
}

const answer = dfs("", 0);
console.log(answer);
