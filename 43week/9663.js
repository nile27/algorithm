function solveNQueens(n) {
    let count = 0;
    const board = new Array(n).fill(0);

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i] === col || Math.abs(board[i] - col) === row - i) {
                return false;
            }
        }
        return true;
    }

    function placeQueens(row) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row] = col;
                placeQueens(row + 1);
                board[row] = 0; // 백트래킹
            }
        }
    }

    placeQueens(0);
    return count;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input, 10);

console.log(solveNQueens(n));
