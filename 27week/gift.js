// 프로그래머스 가장 많이 받은 선물
function solution(friends, gifts) {
  let [count, answer] = [0, 0];
  let table = {};
  let [me, you] = [0, 0];
  for (let name of friends) {
    table[name] = { gift: {}, num: 0 };
    friends.forEach((item) => {
      if (name !== item) {
        table[name].gift[item] = 0;
      }
      return;
    });
  }
  for (let i of gifts) {
    [me, you] = i.split(" ");
    table[me].gift[you] += 1;
    table[me].num += 1;
    table[you].num -= 1;
  }

  for (let item of Object.keys(table)) {
    for (let i of Object.keys(table[item].gift)) {
      if (table[item].gift[i] > table[i].gift[item]) {
        count++;
      }
      if (
        (table[item].gift[i] === 0 && table[i].gift[item] === 0) ||
        table[item].gift[i] === table[i].gift[item]
      ) {
        table[item].num > table[i].num ? count++ : null;
      }
    }
    answer = answer < count ? count : answer;
    count = 0;
  }

  return answer;
}
