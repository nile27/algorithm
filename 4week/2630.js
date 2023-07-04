const fs = require("fs");
let input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

const leng = Number(input.shift());
let ans = [0, 0];

function Quad(arr, n) {
  if (n === leng) {
    let arr1 = [];
    arr1 = arr;
    return { arr1 };
  } else {
    let [arr1, arr2, arr3, arr4] = [[], [], [], []];
    for (let i = 0; i < n; i++) {
      arr1 = [...arr1, arr[i].slice(0, n)];
      arr2 = [...arr2, arr[i].slice(n, n * 2)];
      arr3 = [...arr3, arr[i + n].slice(0, n)];
      arr4 = [...arr4, arr[i + n].slice(n, n * 2)];
    }
    return { arr1, arr2, arr3, arr4 };
  }
}

function quadTree(arr, n) {
  if (n < 1) return;

  let trigger = true;
  let quadObj = Quad(arr, n);
  let quad = 1;

  while (quad < 5 && quadObj[`arr${quad}`]) {
    trigger = true;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (quadObj[`arr${quad}`][0][0] !== quadObj[`arr${quad}`][i][j]) {
          trigger = false;
          break;
        }
      }
      if (!trigger) break;
    }
    if (trigger) ans[Number(quadObj[`arr${quad}`][0][0])]++;
    else quadTree(quadObj[`arr${quad}`], n / 2);
    quad++;
  }
  return;
}

quadTree(input, leng);

console.log(ans.join("\n"));
