// 프로그래머스 달리기 경주
function solution(players, callings) {
  let answer = {};
  let idx = 0;
  let [call, nocall] = [0, 0];
  let temp = "";
  for (let i = 0; i < players.length; i++) {
    answer[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    call = answer[callings[i]];
    nocall = answer[players[call - 1]];
    temp = players[call];
    players[call] = players[nocall];
    players[nocall] = temp;

    answer[players[call]] = nocall + 1;
    answer[callings[i]] = call - 1;
  }

  return Object.keys(answer).sort((a, b) => answer[a] - answer[b]);
}
