// 프로그래머스 삼총사
function solution(number) {
  var answer = 0;
  let arr = number.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > 0) {
        sum -= arr[j];
        break;
      }
      for (let k = j + 1; k < arr.length; k++) {
        sum += arr[k];
        if (sum === 0) answer++;
        if (sum > 0) {
          sum -= arr[k];
          break;
        }
        sum -= arr[k];
      }
      sum -= arr[j];
    }
    sum -= arr[i];
  }

  return answer;
}
