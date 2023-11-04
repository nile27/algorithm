// 프로그래머스 쿼드압축 후 개수 세기
// 시간 초과
function quard(leng, arr) {
  let [a, b, c, d] = [[], [], [], []];
  if (leng === 2) {
    return [arr[0][0], arr[1][0], arr[0][1], arr[1][1]];
  }
  for (let i = 0; i < leng / 2; i++) {
    a.push(arr[i].slice(0, leng / 2));
    b.push(arr[i].slice(leng / 2, leng));
    c.push(arr[i + leng / 2].slice(0, leng / 2));
    d.push(arr[i + leng / 2].slice(leng / 2, leng));
  }
  return [a, b, c, d];
}

function solution(arr) {
  var answer = [0, 0];
  let table = [];
  let stack = [arr];
  let bool = false;
  let shift = [];

  while (stack.length) {
    shift = stack.shift();
    if (typeof shift === "number") answer[shift]++;
    else if (shift.every((item) => item.every((el) => el === shift[0][0]))) {
      answer[shift[0][0]]++;
    } else {
      table = quard(shift.length, shift);
      stack.push(...table);
    }
    table = [];
  }

  return answer;
}

// 정답 코드
function solution(arr) {
  var answer = [0, 0];
  let table = [];
  let shift = [];

  function quard(x, y, leng) {
    if (leng === 1) return answer[arr[x][y]]++;

    let bool = true;

    for (let i = x; i < x + leng; i++) {
      for (let j = y; j < y + leng; j++) {
        if (arr[x][y] !== arr[i][j]) {
          // 맨 첫 값과 동일하지않으면
          bool = false;
          break;
        }
      }
      if (!bool) break;
    }

    let half = Math.floor(leng / 2);

    if (!bool) {
      quard(x, y, half); // 2 quad
      quard(x + half, y, half); // 1 quad
      quard(x, y + half, half); // 3 quad
      quard(x + half, y + half, half);
    } else {
      answer[arr[x][y]]++;
    }
  }

  quard(0, 0, arr.length);

  return answer;
}
