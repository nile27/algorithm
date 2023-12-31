// 프로그래머스 히샤드 수

function solution(x) {
  var answer = true;
  let str = String(x);
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum = sum + Number(str[i]);
  }

  if (x % Math.floor(sum) === 0) return true;
  return false;
}
