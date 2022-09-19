let row, col, length;
let board = [];
const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];
let answer = Number.MIN_SAFE_INTEGER;

function copyBoard() {
  return [...board];
}

function solution() {
  for (let i = 0; i < length; i++) {
    if (board[i] === 0) {
      board[i] = 1;
      for (let j = i + 1; j < length; j++) {
        if (board[j] === 0) {
          board[j] = 1;
          for (let k = j + 1; k < length; k++) {
            if (board[k] === 0) {
              board[k] = 1;
              //Logic
              const copy = copyBoard();
              const spreadedBoard = spreadVirus(copy);
              const safeZone = getSafeZoneNum(spreadedBoard);
              answer = answer > safeZone ? answer : safeZone;
              board[k] = 0;
            }
          }
          board[j] = 0;
        }
      }
      board[i] = 0;
    }
  }
}

function spreadVirus(board) {
  const isVisited = Array.from({ length: length }, () => false);
  for (let i = 0; i < length; i++) {
    if (board[i] === 2) {
      //spread
      const queue = [i];
      while (queue.length) {
        const curPos = queue.shift();
        const x = Math.floor(curPos / col);
        const y = curPos % col;
        for (let dir = 0; dir < 4; dir++) {
          const nextX = x + dx[dir];
          const nextY = y + dy[dir];
          const nextPos = nextX * col + nextY;
          if (nextX < 0 || nextY < 0 || nextX >= row || nextY >= col) continue;
          if (board[nextPos] === 1 || isVisited[nextPos] === true) continue;
          board[nextPos] = 2;
          isVisited[nextPos] = true;
          queue.push(nextPos);
        }
      }
    }
  }
  return board;
}

function getSafeZoneNum(board) {
  let safeZone = 0;
  board.forEach((block) => {
    if (block === 0) safeZone++;
  });
  return safeZone;
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  [row, col] = input[0].split(" ").map(Number);
  input.slice(1).forEach((row) => {
    board = [...board, ...row.split(" ").map(Number)];
  });
  length = board.length;
  solution();
  console.log(answer);
});
