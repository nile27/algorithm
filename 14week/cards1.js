// 프로그래머스 카드 뭉치
function solution(cards1, cards2, goal) {
  var answer = "";
  let i = 0;
  while (i < goal.length) {
    if (cards1[0] === goal[i]) {
      cards1.shift();
    } else if (cards2[0] === goal[i]) {
      cards2.shift();
    } else {
      return "No";
    }
    i++;
  }
  return "Yes";
}
