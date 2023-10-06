// 프로그래머스 [3차]압축

function solution(msg) {
  var answer = [];
  let dict = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  let i = 0;
  let reduceChar = "";

  while (i < msg.length) {
    reduceChar += msg[i];
    if (dict.includes(reduceChar)) {
      i++;
    } else {
      answer.push(dict.indexOf(reduceChar.slice(0, reduceChar.length - 1)) + 1);
      dict.push(reduceChar);
      reduceChar = "";
    }
  }
  if (reduceChar.length !== 0) {
    answer.push(dict.indexOf(reduceChar) + 1);
  }

  return answer;
}
