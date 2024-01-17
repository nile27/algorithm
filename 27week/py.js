// 프로그래머스 문자열 내 p와 y의 개수

function solution(s) {
  let [p, y] = [0, 0];

  for (let i of s) {
    if (i === "p" || i === "P") p++;
    else if (i === "y" || i === "Y") y++;
  }

  return p === y ? true : false;
}
