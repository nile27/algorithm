// 프로그래머스 가운데 글자 가져오기
function solution(s) {
  return s.length % 2 === 0
    ? s[parseInt(s.length / 2) - 1] + s[parseInt(s.length / 2)]
    : s[parseInt(s.length / 2)];
}
