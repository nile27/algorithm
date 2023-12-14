// 프로그래머스 과일 장수
function solution(k, m, score) {
  var answer = 0;
  let scoreArr = score.sort((a, b) => b - a);

  for (let i = m - 1; i < scoreArr.length; i += m) {
    answer += scoreArr[i] * m;
  }

  return answer;
}
