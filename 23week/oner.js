// 프로그래머스 명예의 전당(1)

function solution(k, score) {
  let answer = [score[0]];
  let min = score[0];
  let arr = [score[0]];

  for (let i = 1; i < score.length; i++) {
    if (arr.length < k) {
      arr.push(score[i]);
    } else {
      if (score[i] > min) {
        arr.sort((a, b) => b - a);
        arr.pop();
        arr.push(score[i]);
      }
    }
    min = Math.min(...arr);
    answer.push(min);
  }

  return answer;
}
