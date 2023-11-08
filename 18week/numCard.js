// 프로그래머스 숫자 카드 나누기
function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);
  const findA = (curr, target) => {
    for (let i = curr[0]; i > 0; i--) {
      if (curr.every((v) => v % i === 0) && !target.some((v) => v % i === 0))
        return i;
    }
    return 0;
  };
  return Math.max(findA(arrayA, arrayB), findA(arrayB, arrayA));
}
