const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
let index = 1;

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
];

function bfs(field, x, y, n, m) {
  const queue = [[x, y]];
  field[x][y] = 0; // 방문 처리

  while (queue.length) {
    const [cx, cy] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && field[nx][ny] === 1) {
        queue.push([nx, ny]);
        field[nx][ny] = 0; // 방문 처리
      }
    }
  }
}

for (let t = 0; t < T; t++) {
  const [m, n, k] = input[index].split(' ').map(Number);
  const field = Array.from({ length: n }, () => Array(m).fill(0));
  index++;

  for (let i = 0; i < k; i++) {
    const [y, x] = input[index].split(' ').map(Number);
    field[x][y] = 1;
    index++;
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (field[i][j] === 1) {
        bfs(field, i, j, n, m);
        count++;
      }
    }
  }

  console.log(count);
}
