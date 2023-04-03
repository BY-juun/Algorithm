function solution(board, skill) {
  var answer = 0;
  const row = board.length;
  const col = board[0].length;
  const tmpBoard = Array.from({ length: row + 1 }, () => Array.from({ length: col + 1 }, () => 0));

  skill.forEach(([type, r1, c1, r2, c2, degree]) => {
    degree = type === 1 ? -degree : degree;

    tmpBoard[r1][c1] += degree;
    tmpBoard[r2 + 1][c2 + 1] += degree;
    tmpBoard[r1][c2 + 1] -= degree;
    tmpBoard[r2 + 1][c1] -= degree;
  });

  loop((i, j) => (tmpBoard[i][j + 1] += tmpBoard[i][j]));
  loop((i, j) => (tmpBoard[i + 1][j] += tmpBoard[i][j]));
  loop((i, j) => (board[i][j] += tmpBoard[i][j]));
  loop((i, j) => {
    if (board[i][j] >= 1) answer++;
  });

  function loop(callbackFn) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        callbackFn(i, j);
      }
    }
  }

  return answer;
}
