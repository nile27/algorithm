// 프로그래머스 비밀지도
function solution(n, arr1, arr2) {
  let answer = Array.from({ length: n }, (_) => "");
  let [first, second] = ["", ""];

  for (let i = 0; i < n; i++) {
    [first, second] = [arr1[i].toString(2), arr2[i].toString(2)];
    while (first.length < n || second.length < n) {
      first.length < n ? (first = "0" + first) : null;
      second.length < n ? (second = "0" + second) : null;
    }
    for (let j = 0; j < n; j++) {
      first[j] === "0" && second[j] === "0"
        ? (answer[i] += " ")
        : (answer[i] += "#");
    }
  }

  return answer;
}
