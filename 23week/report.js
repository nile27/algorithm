// 프로그래머스 신고 결과 받기

function solution(id_list, report, k) {
  let idtable = {};
  id_list.forEach((el) => (idtable[el] = 0));
  let setTable = new Set(report);
  let table = {};
  let item = [];
  id_list.forEach((el) => (table[el] = []));

  for (let el of setTable) {
    item = el.split(" ");
    table[item[1]].push(item[0]);
  }
  for (let i of id_list) {
    if (table[i].length >= k) {
      table[i].forEach((item) => idtable[item]++);
    }
  }

  return Object.values(idtable);
}
