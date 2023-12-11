// 프로그래머스 햄버거 만들기

function solution(ingredient) {
  var answer = 0;
  let stack = [];
  let leng = "";

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    leng = stack.length;
    if (leng > 3 && stack.slice(leng - 4, leng).join("") === "1231") {
      for (let j = 0; j < 4; j++) {
        stack.pop();
      }
      answer++;
    }
  }

  return answer;
}
