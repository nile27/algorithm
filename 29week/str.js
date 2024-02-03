//프로그래머스 문자열 밀기
function solution(A, B) {
  var answer = -1;
  if (A === B) return 0;

  let arr = A.split("");

  for (let i = 0; i < arr.length; i++) {
    arr.unshift(arr.pop());

    if (arr.join("") === B) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}
