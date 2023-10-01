// 프로그래머스 두 개 뽑아서 더하기
function solution(numbers) {
  var answer = [];
  let map = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      map.add(numbers[i] + numbers[j]);
    }
  }
  answer = [...map].sort((a, b) => a - b);

  return answer;
}
