//프로그래머스 최솟값 만들기

function solution(A, B) {
  var answer = 0;
  A = A.sort((a, b) => {
    return a - b;
  });
  B = B.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < A.length; i++) {
    answer = A[i] * B[i] + answer;
  }

  return answer;
}
