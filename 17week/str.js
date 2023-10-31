// 프로그래머스 문자열 내 마음대로 정렬

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] !== b[n]) return a[n] < b[n] ? -1 : 1;
    return a < b ? -1 : 1;
  });
}
