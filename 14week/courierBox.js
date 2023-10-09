// 프로그래머스 택배상자
function solution(order) {
  let answer = 0;
  let mainStack = Array.from(
    { length: order.length },
    (_, i) => order.length - i
  );
  mainStack.unshift(0);
  let subStack = [];
  let i = 0;

  while (mainStack[mainStack.length - 1] !== 0) {
    if (order[i] === mainStack[mainStack.length - 1]) {
      answer++;
      mainStack.pop();
      i++;
    } else {
      if (order[i] === subStack[subStack.length - 1]) {
        answer++;
        subStack.pop();
        i++;
      } else {
        subStack.push(mainStack.pop());
      }
    }
  }

  if (subStack[subStack.length - 1] === order[i]) {
    for (let j = i; j < order.length; j++) {
      if (subStack[subStack.length - 1] === order[j]) {
        answer++;
        subStack.pop();
      }
    }
  }

  return answer;
}
