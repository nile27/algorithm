function solution(board) {
  var answer = 0;
  // 프로그래머스 안전지대
  let xyArr = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  let [x, y] = [0, 0];
  let map = Array.from({ length: board.length }, () =>
    Array.from({ length: board.length }, () => 0)
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        answer += 1;
        map[i][j] = 1;
        for (let xy of xyArr) {
          [x, y] = [xy[0], xy[1]];
          if (
            0 <= x + i &&
            board.length > x + i &&
            0 <= y + j &&
            board.length > y + j &&
            board[x + i][y + j] === 0 &&
            map[x + i][y + j] === 0
          ) {
            answer += 1;
            map[x + i][y + j] = 1;
          }
        }
      }
    }
  }

  return board.length ** 2 - answer;
}
