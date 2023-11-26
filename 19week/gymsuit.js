// 프로그래머스 체육복
function solution(n, lostArr, reserveArr) {
  let answer = n - lostArr.length;
  let shift = 0;
  let reshift = 0;
  let j = 0;
  let lost = lostArr.filter((item) => !reserveArr.includes(item));
  let reserve = reserveArr.filter((item) => !lostArr.includes(item));
  answer += lostArr.length - lost.length;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  while (lost.length) {
    shift = lost.shift();
    while (j <= reserve.length && reserve.length) {
      reshift = reserve.shift();
      if (reshift === shift - 1 || reshift === shift + 1) {
        answer += 1;
        break;
      } else {
        reserve.push(reshift);
      }
      j++;
    }
    j = 0;
  }

  return answer;
}
