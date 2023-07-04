const fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const leng = Number(input.shift());
input = input.map((item) => item.split(" ").map(Number));
let ans = Array.from({ length: 3 }, () => 0);

function paper(arr, firstX, firstY, n) {
  let trigger = true;
  if (n < 1) return;

  for (let i = firstX; i < n + firstX; i++) {
    for (let j = firstY; j < n + firstY; j++) {
      if (arr[firstX][firstY] !== arr[i][j]) {
        trigger = false;
        break;
      }
    }
    if (!trigger) break;
  }

  if (trigger) {
    switch (arr[firstX][firstY]) {
      case -1:
        ans[0]++;
        break;
      case 0:
        ans[1]++;
        break;
      case 1:
        ans[2]++;
        break;
    }
  } else {
    for (let i = 0; i < 3; i++) {
      paper(arr, i * (n / 3) + firstX, 0 * (n / 3) + firstY, n / 3);
      paper(arr, i * (n / 3) + firstX, 1 * (n / 3) + firstY, n / 3);
      paper(arr, i * (n / 3) + firstX, 2 * (n / 3) + firstY, n / 3);
    }
  }
}

paper(input, 0, 0, leng);

console.log(ans.join("\n"));
