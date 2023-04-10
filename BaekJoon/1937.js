/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const convertStrToNum = (str) => str.split(' ').map(Number);
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input.slice(1).map((v) => convertStrToNum(v)));
});

function solution(board) {
  const n = board.length;
  const dx = [-1, 0, 0, 1];
  const dy = [0, -1, 1, 0];

  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false),
  );

  let answer = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] !== false) answer = Math.max(answer, DFS(i, j));
    }
  }

  console.log(answer);

  function DFS(x, y) {
    if (dp[x][y] !== false) return dp[x][y];

    dp[x][y] = 1;

    let temp = 0;
    for (let dir = 0; dir < 4; dir++) {
      const nextX = x + dx[dir];
      const nextY = y + dy[dir];

      if (isOutOfBoard(nextX, nextY)) continue;

      if (board[x][y] < board[nextX][nextY]) continue;

      temp = Math.max(temp, DFS(nextX, nextY));
    }

    dp[x][y] += temp;
    return dp[x][y];
  }

  function isOutOfBoard(x, y) {
    if (x < 0 || y < 0 || x >= n || y >= n) return true;
    return false;
  }
}
