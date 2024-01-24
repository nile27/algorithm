// 프로그래머스 다음에 올 숫자

function solution(common) {
  let [plus, mul] = [common[1] - common[0], common[1] / common[0]];

  if (common[common.length - 1] - common[common.length - 2] === plus) {
    return common[common.length - 1] + plus;
  } else {
    return common[common.length - 1] * mul;
  }
}
