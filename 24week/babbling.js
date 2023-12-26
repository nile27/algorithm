// 프로그래머스 옹알이 (2)
function solution(babbling) {
  var answer = 0;
  let bab = ["aya", "ye", "woo", "ma"];
  let stack = "";
  let index = 0;
  let prev = "";

  for (let item of babbling) {
    for (let i = 0; i < item.length; i++) {
      stack += item[i];
      index = bab.indexOf(stack);
      if (index !== -1 && stack !== prev) {
        prev = stack;
        stack = "";
      }
    }
    if (stack.length === 0) answer++;
    stack = "";
    prev = "";
  }

  return answer;
}
