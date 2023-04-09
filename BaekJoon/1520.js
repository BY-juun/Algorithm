const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const board = input.slice(1).map((v) => v.split(" ").map(Number));
  solution(board);
});

function solution(board) {
  const m = board.length;
  const n = board[0].length;
  const dx = [-1, 0, 0, 1];
  const dy = [0, -1, 1, 0];
  const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => -1));

  console.log(dfs(0, 0));

  function dfs(currentX, currentY) {
    if (currentX === m - 1 && currentY === n - 1) return 1;

    if (dp[currentX][currentY] !== -1) return dp[currentX][currentY];

    let h = 0;
    for (let dir = 0; dir < 4; dir++) {
      const nextX = dx[dir] + currentX;
      const nextY = dy[dir] + currentY;

      if (!isInBoard(nextX, nextY)) continue;
      if (board[nextX][nextY] >= board[currentX][currentY]) continue;

      h += dfs(nextX, nextY);
    }
    dp[currentX][currentY] = h;

    return h;
  }

  function isInBoard(x, y) {
    if (x < 0 || x >= m || y < 0 || y >= n) return false;
    return true;
  }
}
