// 프로그래머스 평행

function solution(dots) {
  var answer = 0;
  let visited = Array.from({ length: 4 }, () => false);
  let xyArr = [];
  let [x1, y1, x2, y2] = [0, 0, 0, 0];
  function dfs(depth) {
    if (depth === 4) {
      x1 = Math.abs(dots[xyArr[0]][0] - dots[xyArr[1]][0]);
      y1 = Math.abs(dots[xyArr[0]][1] - dots[xyArr[1]][1]);
      x2 = Math.abs(dots[xyArr[2]][0] - dots[xyArr[3]][0]);
      y2 = Math.abs(dots[xyArr[2]][1] - dots[xyArr[3]][1]);
      if (y1 / x1 === y2 / x2) {
        answer += 1;
      }
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (!visited[i] && answer === 0) {
        visited[i] = true;
        xyArr.push(i);
        dfs(depth + 1);
        xyArr.pop();
        visited[i] = false;
      }
      if (answer === 1) break;
    }
    return;
  }
  dfs(0);

  return answer;
}
