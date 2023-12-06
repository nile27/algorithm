// 프로그래머스 [PCCP 기출문제] 2번 / 석유 시추

// 유효성 검사 2개 런타임 에러 (재귀)
function solution(land) {
  let answer = 0;
  let xarr = [0, -1, 0, 1];
  let yarr = [-1, 0, 1, 0];
  let sum = 0;
  let num = 0;
  let table = { 0: 0 };
  let set = new Set();
  let visit = Array.from({ length: land.length }, (_) =>
    Array.from({ length: land[0].length }, (_) => 0)
  );

  const dfs = (x, y, num) => {
    for (let i = 0; i < 4; i++) {
      if (
        -1 < xarr[i] + x &&
        land.length > xarr[i] + x &&
        -1 < yarr[i] + y &&
        land[0].length > yarr[i] + y &&
        land[xarr[i] + x][yarr[i] + y] === 1 &&
        visit[xarr[i] + x][yarr[i] + y] === 0
      ) {
        sum += 1;
        visit[xarr[i] + x][yarr[i] + y] = num;
        dfs(xarr[i] + x, yarr[i] + y, num);
      }
    }
  };

  for (let i = 0; i < land[0].length; i++) {
    for (let j = 0; j < land.length; j++) {
      if (land[j][i] === 1 && visit[j][i] === 0) {
        num++;
        visit[j][i] = num;
        sum += 1;
        dfs(j, i, num);
        table[num] = sum;
      }
      sum = 0;
    }
  }
  for (let i = 0; i < land[0].length; i++) {
    for (let j = 0; j < land.length; j++) {
      set.add(visit[j][i]);
    }
    for (let item of set) {
      sum += table[item];
    }

    answer = Math.max(answer, sum);
    sum = 0;
    set.clear();
  }

  return answer;
}

// 정답 코드 queue를 이용한 풀이

function solution(land) {
  let answer = 0;
  let xarr = [0, -1, 0, 1];
  let yarr = [-1, 0, 1, 0];
  let sum = 0;
  let num = 0;
  let table = { 0: 0 };
  let set = new Set();
  let visit = Array.from({ length: land.length }, (_) =>
    Array.from({ length: land[0].length }, (_) => 0)
  );

  const dfs = (x, y, num) => {
    let queue = [[x, y]];
    let shift = [];
    while (queue.length) {
      shift = queue.shift();
      for (let i = 0; i < 4; i++) {
        if (
          -1 < xarr[i] + shift[0] &&
          land.length > xarr[i] + shift[0] &&
          -1 < yarr[i] + shift[1] &&
          land[0].length > yarr[i] + shift[1] &&
          land[xarr[i] + shift[0]][yarr[i] + shift[1]] === 1 &&
          visit[xarr[i] + shift[0]][yarr[i] + shift[1]] === 0
        ) {
          sum += 1;
          visit[xarr[i] + shift[0]][yarr[i] + shift[1]] = num;
          queue.push([xarr[i] + shift[0], yarr[i] + shift[1]]);
        }
      }
    }
  };

  for (let i = 0; i < land[0].length; i++) {
    for (let j = 0; j < land.length; j++) {
      if (land[j][i] === 1 && visit[j][i] === 0) {
        num++;
        visit[j][i] = num;
        sum += 1;
        dfs(j, i, num);
        table[num] = sum;
      }
      sum = 0;
    }
  }
  for (let i = 0; i < land[0].length; i++) {
    for (let j = 0; j < land.length; j++) {
      set.add(visit[j][i]);
    }
    for (let item of set) {
      sum += table[item];
    }

    answer = Math.max(answer, sum);
    sum = 0;
    set.clear();
  }

  return answer;
}
