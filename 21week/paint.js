// 프로그래머스 덧칠하기

function solution(n, m, section) {
  var answer = 0;
  let arr = Array.from({ length: n }, (_) => true);
  section.forEach((item) => (arr[item - 1] = false));

  for (let i of section) {
    if (!arr[i - 1]) {
      for (let j = 0; j < m; j++) {
        arr[i + j - 1] = true;
      }
      answer++;
    }
  }

  return answer;
}
