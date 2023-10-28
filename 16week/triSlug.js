// 프로그래머스 삼각 달팽이

function solution(n) {
  let arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(1));
  let x = -1;
  let y = 0;
  let num = 1;

  for (let count = 0; count < n; count++) {
    for (let i = 0; i < n - count; i++) {
      if (count % 3 === 0) {
        x++;
      } else if (count % 3 === 1) {
        y++;
      } else {
        x--;
        y--;
      }
      arr[x][y] = num;
      num++;
    }
  }

  return arr.flat();
}
