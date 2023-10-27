// 프로그래머스 문자열 내림차순 배치
function solution(s) {
  return s
    .split("")
    .sort((b, a) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
}
