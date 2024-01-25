// 프로그래머스 주사위 게임 3

function solution(a, b, c, d) {
  let arr = [a, b, c, d];
  let table = {};
  let key = [];

  for (let i = 0; i < 4; i++) {
    !table[arr[i]] ? (table[arr[i]] = 1) : (table[arr[i]] += 1);
  }
  key = Object.keys(table)
    .map(Number)
    .sort((a, b) => table[b] - table[a]);

  switch (key.length) {
    case 1:
      return key[0] * 1111;
      break;
    case 2:
      if (table[key[0]] === table[key[1]]) {
        return (key[0] + key[1]) * Math.abs(key[0] - key[1]);
      } else {
        return (10 * key[0] + key[1]) ** 2;
      }
      break;
    case 3:
      return key[1] * key[2];
      break;
    case 4:
      return Math.min(...key);
  }
}
