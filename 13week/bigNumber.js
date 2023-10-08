// 프로그래머스 큰 수 만들기
// 스택 버전
function solution(number, k) {
  let stack = [];
  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  stack.splice(stack.length - k, k);
  let answer = stack.join("");

  return answer;
}

// 첫 문제 풀이 시간 초과
// function solution(number, k) {
//   let answer = "";
//   let arr = number.split("").map(Number);
//   let [num, idx] = [0, 0];

//   while (answer.length < number.length - k) {
//     num = Math.max(...arr.slice(0, number.length));
//     idx = arr.indexOf(num);

//     if (arr.length - idx + answer.length < number.length - k) {
//       while (arr.length - idx + answer.length < number.length - k) {
//         num = Math.max(...arr.slice(0, idx));
//         idx = arr.indexOf(num);
//       }
//     }

//     arr = arr.slice(idx + 1, number.length);
//     answer += String(num);
//   }

//   return answer;
// }
