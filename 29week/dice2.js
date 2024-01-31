// 프로그래머스 주사위 게임2
function solution(a, b, c) {
  var answer = 0;
  let arr = new Set([a, b, c]);

  switch (arr.size) {
    case 1:
      answer =
        (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
      break;
    case 2:
      answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
      break;
    case 3:
      answer = a + b + c;
  }

  return answer;
}
