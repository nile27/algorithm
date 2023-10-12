// 프로그래머스 주차 요금 계산
function timeFunc(start, end) {
  let [shour, smin] = [
    Number(start.slice(0, 2)) * 60,
    Number(start.slice(3, 5)),
  ];
  let [ehour, emin] = [Number(end.slice(0, 2)) * 60, Number(end.slice(3, 5))];

  return ehour + emin - (shour + smin);
}

function solution(fees, records) {
  var answer = [];
  let table = {};
  let carNumber = "";
  let sum = 0;

  for (let i = 0; i < records.length; i++) {
    carNumber = records[i].slice(6, 10);

    if (!table[carNumber]) {
      table[carNumber] = { IN: [], OUT: [] };
    }
    records[i][records[i].length - 1] === "N"
      ? table[carNumber].IN.push(records[i].slice(0, 5))
      : table[carNumber].OUT.push(records[i].slice(0, 5));
  }
  let arr = Object.keys(table).sort((a, b) => Number(a) - Number(b));

  for (let key of arr) {
    for (let j = 0; j < table[key].IN.length; j++) {
      if (table[key].OUT[j]) {
        sum += timeFunc(table[key].IN[j], table[key].OUT[j]);
      } else {
        sum += timeFunc(table[key].IN[j], "23:59");
      }
    }

    sum < fees[0]
      ? answer.push(fees[1])
      : answer.push(fees[1] + Math.ceil((sum - fees[0]) / fees[2]) * fees[3]);

    sum = 0;
  }

  return answer;
}
