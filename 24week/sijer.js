// 프로그래머스 시저 암호
function solution(s, n) {
  var answer = "";
  let trigger = false;
  let charNum = 0;

  for (let i of s) {
    if (i !== " ") {
      charNum = i.charCodeAt();
      if (charNum <= 90) {
        charNum = i.toLowerCase().charCodeAt();
        trigger = true;
      }

      charNum += n;

      if (charNum > 122) {
        charNum -= 26;
      }
      answer +=
        trigger === true
          ? String.fromCharCode(charNum).toUpperCase()
          : String.fromCharCode(charNum);
      trigger = false;
    } else {
      answer += " ";
    }
  }

  return answer;
}
