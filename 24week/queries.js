// 프로그래머스 행렬 테두리 회전하기

function solution(rows, columns, queries) {
  var answer = [];
  let square = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => i * columns + (j + 1))
  );
  let xArr = [1, 0, -1, 0];
  let yArr = [0, 1, 0, -1];
  let prev = 0;
  let min = 0;
  let [sx, sy, ex, ey, x, y] = [0, 0, 0, 0, 0, 0];
  let j = 0;
  let limit = 0;
  let temp = 0;

  for (let arr of queries) {
    [sy, sx, ey, ex] = arr.map((item) => item - 1);
    min = square[sy][sx];
    prev = square[sy][sx];
    x = sx;
    y = sy;
    for (let i = 0; i < 4; i++) {
      limit = i % 2 === 0 ? Math.abs(sx - ex) : Math.abs(ey - sy);
      while (j < limit) {
        x += xArr[i];
        y += yArr[i];
        min = Math.min(square[y][x], min);
        temp = square[y][x];
        square[y][x] = prev;
        prev = temp;
        j++;
      }
      j = 0;
    }

    answer.push(min);
  }
  return answer;
}
