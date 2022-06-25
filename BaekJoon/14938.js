const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m, r] = input[0].split(" ").map(Number);
  const items = input[1].split(" ").map(Number);
  const board = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
  for (let i = 0; i < n; i++) {
    board[i][i] = 0;
  }
  input.slice(2).forEach((v) => {
    const [a, b, w] = v.split(" ").map(Number);
    board[a - 1][b - 1] = w;
    board[b - 1][a - 1] = w;
  });
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] > board[i][k] + board[k][j]) {
          board[i][j] = board[i][k] + board[k][j];
        }
      }
    }
  }
  let answer = Number.MIN_SAFE_INTEGER;
  board.forEach((row) => {
    let GetItems = 0;
    row.forEach((v, idx) => {
      if (v <= m) GetItems += items[idx];
    });
    if (GetItems > answer) answer = GetItems;
  });
  console.log(answer);
});
