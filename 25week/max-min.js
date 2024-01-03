// 프로그래머스 최댓값과 최솟값

function solution(s) {
  var answer = "";
  let numArr = s.split(" ");
  answer = String(Math.min(...numArr)) + " " + String(Math.max(...numArr));

  return answer;
}
ㅎ;
