function solution(board) {
  const n = board.length;
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== 1) continue;
      for (let k = 0; k < 8; k++) {
        const nx = j + dx[k];
        const ny = i + dy[k];

        if (0 <= nx && nx < n && 0 <= ny && ny < n && board[ny][nx] !== 1) {
          board[ny][nx] = 2;
        }
      }
    }
  }

  return board.reduce(
    (a, c) => a + c.reduce((a, c) => (c === 0 ? a + 1 : a), 0),
    0
  );
}
