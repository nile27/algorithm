// 프로그래머스 무인도 여행

function solution(maps) {
  var answer = [];
  const arrx = [-1, 0, 1, 0];
  const arry = [0, -1, 0, 1];
  let sum = 0;
  let visit = Array.from({ length: maps.length }, (_) =>
    Array.from({ length: maps[0].length }, () => false)
  );

  const dfs = (x, y) => {
    for (let i = 0; i < arrx.length; i++) {
      if (
        -1 < x + arrx[i] &&
        maps.length > x + arrx[i] &&
        -1 < y + arry[i] &&
        maps[0].length > y + arry[i]
      ) {
        if (
          maps[x + arrx[i]][y + arry[i]] !== "X" &&
          visit[x + arrx[i]][y + arry[i]] === false
        ) {
          sum += Number(maps[x + arrx[i]][y + arry[i]]);
          visit[x + arrx[i]][y + arry[i]] = true;
          dfs(x + arrx[i], y + arry[i]);
        }
      }
    }
  };

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== "X" && visit[i][j] === false) {
        sum = Number(maps[i][j]);
        visit[i][j] = true;
        dfs(i, j);
        answer.push(sum);
      }
    }
  }

  return answer.length ? answer.sort((a, b) => Number(a) - Number(b)) : [-1];
}
