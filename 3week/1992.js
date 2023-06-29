const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().trim().split("\n");
const leng = Number(input.shift());
let ans = "";

function Quad(arr, n) {
  let [arr1, arr2, arr3, arr4] = [[], [], [], []];

  if (n === leng) {
    return { arr1: arr };
  }
  for (let i = 0; i < n; i++) {
    arr1 = [...arr1, arr[i].slice(0, n)];
    arr2 = [...arr2, arr[i].slice(n, n * 2)];
    arr3 = [...arr3, arr[i + n].slice(0, n)];
    arr4 = [...arr4, arr[i + n].slice(n, n * 2)];
  }

  return { arr1, arr2, arr3, arr4 };
}

function QuadTree(arr, n) {
  let quad = 1;
  let quadObj = Quad(arr, n);
  let trigger = true;

  while (quad < 5 && quadObj[`arr${quad}`]) {
    trigger = true;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (quadObj[`arr${quad}`][i][j] !== quadObj[`arr${quad}`][0][0]) {
          trigger = false;
          break;
        }
      }
    }
    if (trigger) ans = ans + quadObj[`arr${quad}`][0][0];
    else {
      ans = ans + "(";
      QuadTree(quadObj[`arr${quad}`], n / 2);
      ans = ans + ")";
    }
    quad++;
  }
}

QuadTree(input, leng);
console.log(ans.trim());
