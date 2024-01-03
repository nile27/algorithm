// JadenCase 문자열 만들기

function solution(s) {
  let first = "";
  let ans = "";
  var answer = s.split(" ").map((a) => {
    if (a !== "") {
      first = a[0].toUpperCase();
      a = a.slice(1).toLowerCase();
      return first + a;
    } else return "";
  });
  ans = answer.join(" ");

  return ans;
}
