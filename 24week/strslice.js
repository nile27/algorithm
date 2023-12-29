// 프로그래머스 문자열 나누기
function solution(s) {
  var answer = 0;
  let [prev, next] = ["", ""];
  let [pCount, nCount] = [0, 0];

  for (let i = 0; i < s.length; i++) {
    if (!prev) {
      prev = s[i];
      pCount = 1;
    } else {
      next = s[i];

      prev !== next ? nCount++ : pCount++;

      if (pCount === nCount) {
        prev = "";
        pCount = 0;
        nCount = 0;
        answer += 1;
      }
    }
  }
  if (prev) answer += 1;

  return answer;
}
