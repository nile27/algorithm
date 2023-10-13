// 프로그래머스 오픈채팅방
function solution(record) {
  var answer = [];
  let recordArr = record.map((item) => {
    return item.split(" ");
  });
  let table = {};
  let id = "";

  for (let i = 0; i < recordArr.length; i++) {
    id = recordArr[i][1];

    if (!table[id]) {
      table[id] = recordArr[i][2];
    }

    if (recordArr[i][0] === "Enter") {
      table[id] = recordArr[i][2];
      answer.push([id, "enter"]);
    } else if (recordArr[i][0] === "Change") {
      table[id] = recordArr[i][2];
    } else {
      answer.push([id, "Leave"]);
    }
  }

  answer = answer.map((item) => {
    return item[1] === "enter"
      ? `${table[item[0]]}님이 들어왔습니다.`
      : `${table[item[0]]}님이 나갔습니다.`;
  });

  return answer;
}
