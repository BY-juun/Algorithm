function Floyd_Marshall(board, n) {
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] > board[i][k] + board[k][j]) board[i][j] = board[i][k] + board[k][j];
      }
    }
  }
}

function Find_Shared_Point(board, s, a, b, n) {
  let answer = board[s - 1][a - 1] + board[s - 1][b - 1];
  for (let i = 0; i < n; i++) {
    const newPath = board[s - 1][i] + board[i][a - 1] + board[i][b - 1];
    answer = answer > newPath ? newPath : answer;
  }
  return answer;
}

function solution(n, s, a, b, fares) {
  var answer = 0;
  const board = new Array(n).fill().map((_) => new Array(n).fill(Infinity));

  // 자기 자신에 대한 최단 경로는 0으로 설정
  for (let i = 0; i < n; i++) {
    board[i][i] = 0;
  }

  fares.forEach((fare) => {
    const [x, y, weight] = fare;
    board[x - 1][y - 1] = weight;
    board[y - 1][x - 1] = weight;
  });

  Floyd_Marshall(board, n);

  answer = Find_Shared_Point(board, s, a, b, n);

  return answer;
}
