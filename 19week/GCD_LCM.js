// 프로그래머스 최대공약수와 최소공배수

let GCD = (num1, num2) => {
  while (num2 > 0) {
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
  }
  return num1;
};

function solution(n, m) {
  var answer = [];
  answer.push(GCD(n, m));
  let i = n < m ? m : n;
  while (true) {
    if (i % n === 0 && i % m === 0) {
      answer.push(i);
      break;
    }
    i++;
  }

  return answer;
}
