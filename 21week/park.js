// 프로그래머스 공원 산책
function solution(park, routes) {
  var answer = [0, 0];
  let y = 0;
  let dirc = [];
  let check = true;

  let route = {
    E: 1,
    W: -1,
    N: -1,
    S: 1,
  };
  for (let i = 0; i < park.length; i++) {
    y = park[i].indexOf("S");
    console.log(y);
    if (y !== -1) {
      answer[0] = i;
      answer[1] = y;
      break;
    }
  }

  for (let arr of routes) {
    dirc = arr.split(" ");
    dirc[1] = Number(dirc[1]);
    if (dirc[0] === "E" || dirc[0] === "W") {
      for (let i = 1; i < dirc[1] + 1; i++) {
        if (
          answer[1] + route[dirc[0]] * i < 0 ||
          answer[1] + route[dirc[0]] * i >= park[0].length ||
          park[answer[0]][answer[1] + route[dirc[0]] * i] === "X"
        ) {
          check = false;

          break;
        }
      }
    } else if (dirc[0] === "N" || dirc[0] === "S") {
      for (let i = 1; i < dirc[1] + 1; i++) {
        if (
          answer[0] + route[dirc[0]] * i < 0 ||
          answer[0] + route[dirc[0]] * i >= park.length ||
          park[answer[0] + route[dirc[0]] * i][answer[1]] === "X"
        ) {
          check = false;

          break;
        }
      }
    }
    if (check) {
      dirc[0] === "N" || dirc[0] === "S"
        ? (answer[0] += route[dirc[0]] * dirc[1])
        : (answer[1] += route[dirc[0]] * dirc[1]);
    }

    check = true;
  }

  return answer;
}
