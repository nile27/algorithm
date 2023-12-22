// 프로그래머스 다트 게임

function solution(dartResult) {
  var answer = 0;
  let stack = [];
  let result = "";

  for (let i = 0; i < dartResult.length; i++) {
    if (Number(dartResult[i]) || Number(dartResult[i]) === 0) {
      result += dartResult[i];
    } else {
      result = result ? Number(result) : null;
      switch (dartResult[i]) {
        case "D":
          result = result ** 2;
          break;
        case "T":
          result = result ** 3;
          break;
        case "*":
          if (stack.length < 2)
            stack[stack.length - 1] = stack[stack.length - 1] * 2;
          else {
            stack[stack.length - 1] = stack[stack.length - 1] * 2;
            stack[stack.length - 2] = stack[stack.length - 2] * 2;
          }
          break;
        case "#":
          stack[stack.length - 1] = stack[stack.length - 1] * -1;
          break;
        default:
          break;
      }

      if (result || result === 0) {
        stack.push(result);
      }
      result = "";
    }
  }
  for (let i of stack) {
    answer += i;
  }

  return answer;
}
