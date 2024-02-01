// 프로그래머스 코드 처리하기
function solution(code) {
  var answer = "";
  let trigger = false;

  for (let i = 0; i < code.length; i += 1) {
    if (code[i] === "1") trigger = !trigger;
    else if (trigger && i % 2 !== 0) {
      answer += code[i];
    } else if (!trigger && i % 2 === 0) {
      answer += code[i];
    }
  }

  return !answer.length ? "EMPTY" : answer;
}
