// 프로그래머스 전화번호 목록

const findFunc = (long, short) => {
  let max = Math.ceil(short.length / 2);
  for (let i = 0; i < max; i++) {
    if (
      long[i] !== short[i] ||
      long[long.length - i - 1] !== short[long.length - i - 1]
    )
      return false;
  }
  return true;
};

function solution(arr) {
  let answer = true;
  let phone_book = [...arr].sort();
  let first = "";

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length))
      return false;
  }

  return answer;
}
