const isEven = (num) => (num % 2 === 0 ? true : false);

function solution(board) {
  const r = board.length;
  const c = board[0].length;
  let answer = "";

  if (isEven(r) && isEven(c)) {
    //이때는 하나를 못 돌아.
    const [minX, minY] = getMinNumber();
    let col = 0;
    let j = 0;

    while (col < c) {
      let currentLetter = isEven(col) ? "D" : "U";
      while (true) {}
    }
  } else {
    //이때는 다 돌 수 있어.
    let col = 0;
    while (col < c) {
      if (isEven(col)) answer += "D".repeat(r - 1);
      else answer += "U".repeat(r - 1);
      if (col + 1 !== c) answer += "R";
      col++;
    }
  }

  console.log(answer);

  function isOutOfBound(x, y) {
    if (x < 0 || y < 0 || x >= r || y >= c) return true;
    return false;
  }

  function isEnd(x, y) {
    if (x === r - 1 && y === c - 1) return true;
    return false;
  }

  function getMinNumber() {
    let minValue = Number.MAX_SAFE_INTEGER;
    let x = 0;
    let y = 0;
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (isEven(i) && isEven(j)) continue;
        if (board[i][j] < minValue) {
          minValue = board[i][j];
          x = i;
          y = j;
        }
      }
    }
    return [x, y];
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const board = [];

  input.slice(1).forEach((row) => {
    board.push(row.split(" ").map(Number));
  });

  solution(board);
});
