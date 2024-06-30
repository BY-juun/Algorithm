const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m, x] = input[0].split(" ").map(Number);
  const board = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));

  for (let i = 0; i < n; i++) {
    board[i][i] = 0;
  }

  input.slice(1).forEach((line) => {
    const [start, end, cost] = line.split(" ").map(Number);
    board[start - 1][end - 1] = cost;
  });

  solve(board, x - 1);
});

function solve(board, x) {
  let answer = Number.MIN_SAFE_INTEGER;
  const n = board.length;
  floydMarshall(board, n);

  for (let i = 0; i < n; i++) {
    if (i === x) continue;
    answer = Math.max(board[i][x] + board[x][i], answer);
  }
  console.log(answer);
}

function floydMarshall(board, n) {
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] > board[i][k] + board[k][j]) board[i][j] = board[i][k] + board[k][j];
      }
    }
  }
}
