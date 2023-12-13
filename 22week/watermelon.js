// 프로그래머스 수박수박
function solution(n) {
  var answer = "";
  let i = 0;

  while (i < n) {
    if (i % 2 === 0) answer += "수";
    else answer += "박";
    i++;
  }

  return answer;
}
