// 프로그래머스 둘만의 암호

function solution(s, skip, index) {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  );

  skip.split("").forEach((v) => {
    alphabet.splice(alphabet.indexOf(v), 1);
  });

  const answer = s
    .split("")
    .map((v) => {
      return alphabet[(alphabet.indexOf(v) + index) % alphabet.length];
    })
    .join("");

  return answer;
}
