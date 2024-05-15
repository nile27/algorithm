function solution(board) {
  var answer = 0;
  let xy = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];
  let leng = board.length * board[0].length;
  const changeOne = (x, y) => {
    for (let i of xy) {
      if (
        x + i[1] >= board.length ||
        x + i[1] < 0 ||
        y + i[0] >= board[0].length ||
        y + i[0] < 0
      )
        continue;
      if (board[y + i[0]][x + i[1]] === 0) {
        board[y + i[0]][x + i[1]] = 2;
        leng -= 1;
      }
    }
    leng -= 1;
  };

  board.forEach((item, idx) => {
    item.forEach((mine, index) => {
      if (mine === 1) {
        changeOne(index, idx);
      }
    });
  });

  return leng;
}
