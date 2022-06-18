const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const board = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
  for (let i = 0; i < n; i++) {
    board[i][i] = 0;
  }
  input.slice(1).forEach((v) => {
    const [a, b] = v.split(" ").map(Number);
    board[a - 1][b - 1] = 1;
    board[b - 1][a - 1] = 1;
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] > board[i][k] + board[k][j]) board[i][j] = board[i][k] + board[k][j];
      }
    }
  }
  let sum = Number.MAX_SAFE_INTEGER;
  let answer = 0;
  board.forEach((v, idx) => {
    const result = v.reduce((acc, cur) => acc + cur, 0);
    if (result < sum) {
      sum = result;
      answer = idx + 1;
    }
  });
  console.log(answer);
});
