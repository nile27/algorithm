// 프로그래머스 이상한 문자 만들기

function solution(s) {
  var answer = "";
  let arr = s.split("");
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      arr[i] = count % 2 === 0 ? arr[i].toUpperCase() : arr[i].toLowerCase();
      count++;
    } else {
      count = 0;
    }
  }
  return arr.join("");
}
