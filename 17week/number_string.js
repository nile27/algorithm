// 프로그래머스 숫자 문자열과 영단어

function solution(s) {
  let answer = "";
  let strArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let str = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) > 47 && s[i].charCodeAt(0) < 58) answer += s[i];
    else {
      str += s[i];
      if (strArr.includes(str)) {
        answer += strArr.indexOf(str);
        str = "";
      }
    }
  }

  return Number(answer);
}
