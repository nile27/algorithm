// 프로그래머스 배열 조각하기

function solution(arr, query) {
  let answer = [...arr];
  for (let i = 0; i < query.length; i++) {
    answer =
      i % 2 === 0
        ? answer.slice(0, query[i] + 1)
        : answer.slice(query[i], answer.length);
  }
  return answer;
}
