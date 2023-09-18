//프로그래머스 행렬 곱셈
function solution(arr1, arr2) {
  let answer = [];
  let sumArr = [];
  let sum = 0;

  for (let k = 0; k < arr1.length; k++) {
    for (let i = 0; i < arr2[0].length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        sum = sum + arr1[k][j] * arr2[j][i];
      }
      sumArr.push(sum);
      sum = 0;
    }
    answer.push(sumArr);
    sumArr = [];
  }
  return answer;
}
