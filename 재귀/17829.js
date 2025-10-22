const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let N = Number(input[0]);
let matrix = input.slice(1, 1 + N).map((line) => line.split(" ").map(Number));

function solve(mat, size) {
  while (size > 1) {
    let newSize = size / 2;
    let newMat = Array.from({ length: newSize }, () => Array(newSize).fill(0));

    let values = [];

    for (let i = 0; i < size; i += 2) {
      for (let j = 0; j < size; j += 2) {
        values[0] = mat[i][j];
        values[1] = mat[i][j + 1];
        values[2] = mat[i + 1][j];
        values[3] = mat[i + 1][j + 1];

        values.sort((a, b) => b - a);
        newMat[i / 2][j / 2] = values[1];
      }
    }

    mat = newMat;
    size = newSize;
  }

  return mat[0][0];
}

const result = solve(matrix, N);
console.log(result);
