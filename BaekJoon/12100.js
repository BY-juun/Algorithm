const dir = ["up", "down", "left", "right"];

function findMax(board) {
  let max = Number.MIN_SAFE_INTEGER;
  board.forEach((v) => {
    const curMax = Math.max(...v);
    max = max > curMax ? max : curMax;
  });
  return max;
}

function CopyBoard(board) {
  const newBoard = [];
  board.forEach((v) => {
    newBoard.push([...v]);
  });
  return newBoard;
}

function Swap(board, x, y, Dx, Dy) {
  const val = board[x][y];
  board[Dx][Dy] = val;
  board[x][y] = 0;
}

function MoveUp(board) {
  const dir = -1;
  const merged = {};
  for (let i = 1; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== 0) {
        let x = i;
        let y = j;
        while (true) {
          let Dx = x + dir;
          let Dy = y;
          if (Dx < 0 || Dy < 0 || Dx >= board.length || Dy >= board.length) break;
          if (board[Dx][Dy] === 0) Swap(board, x, y, Dx, Dy);
          else {
            if (board[Dx][Dy] === board[x][y]) {
              if (merged[JSON.stringify([Dx, Dy])]) break;
              else {
                merged[JSON.stringify([Dx, Dy])] = true;
                board[Dx][Dy] *= 2;
                board[x][y] = 0;
                break;
              }
            } else break;
          }
          x = Dx;
          y = Dy;
        }
      }
    }
  }
}
function MoveDown(board) {
  const dir = 1;
  const merged = {};
  for (let i = board.length - 2; i >= 0; i--) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== 0) {
        let x = i;
        let y = j;
        while (true) {
          let Dx = x + dir;
          let Dy = y;
          if (Dx < 0 || Dy < 0 || Dx >= board.length || Dy >= board.length) break;
          if (board[Dx][Dy] === 0) Swap(board, x, y, Dx, Dy);
          else {
            if (board[Dx][Dy] === board[x][y]) {
              if (merged[JSON.stringify([Dx, Dy])]) break;
              else {
                merged[JSON.stringify([Dx, Dy])] = true;
                board[Dx][Dy] *= 2;
                board[x][y] = 0;
                break;
              }
            } else break;
          }
          x = Dx;
          y = Dy;
        }
      }
    }
  }
}
function MoveLeft(board) {
  const dir = -1;
  const merged = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 1; j < board.length; j++) {
      if (board[i][j] !== 0) {
        let x = i;
        let y = j;
        while (true) {
          let Dx = x;
          let Dy = y + dir;
          if (Dx < 0 || Dy < 0 || Dx >= board.length || Dy >= board.length) break;
          if (board[Dx][Dy] === 0) Swap(board, x, y, Dx, Dy);
          else {
            if (board[Dx][Dy] === board[x][y]) {
              if (merged[JSON.stringify([Dx, Dy])]) break;
              else {
                merged[JSON.stringify([Dx, Dy])] = true;
                board[Dx][Dy] *= 2;
                board[x][y] = 0;
                break;
              }
            } else break;
          }
          x = Dx;
          y = Dy;
        }
      }
    }
  }
}

function MoveRight(board) {
  const dir = 1;
  const merged = {};
  //console.log("beforeRight : ", board);
  for (let i = 0; i < board.length; i++) {
    for (let j = board.length - 2; j >= 0; j--) {
      if (board[i][j] !== 0) {
        let x = i;
        let y = j;
        while (true) {
          let Dx = x;
          let Dy = y + dir;
          if (Dx < 0 || Dy < 0 || Dx >= board.length || Dy >= board.length) break;
          if (board[Dx][Dy] === 0) Swap(board, x, y, Dx, Dy);
          else {
            if (board[Dx][Dy] === board[x][y]) {
              if (merged[JSON.stringify([Dx, Dy])]) break;
              else {
                merged[JSON.stringify([Dx, Dy])] = true;
                board[Dx][Dy] *= 2;
                board[x][y] = 0;
                break;
              }
            } else break;
          }
          x = Dx;
          y = Dy;
        }
      }
    }
  }

  // console.log("afterRight : ", board);
}

function Move(board, dir) {
  const newBoard = CopyBoard(board);
  switch (dir) {
    case "up":
      MoveUp(newBoard);
      break;
    case "down":
      MoveDown(newBoard);
      break;
    case "left":
      MoveLeft(newBoard);
      break;
    case "right":
      MoveRight(newBoard);
      break;
  }
  return newBoard;
}

function solution(board) {
  const isVisited = {};
  let answer = Number.MIN_SAFE_INTEGER;
  isVisited[JSON.stringify(board)] = true;
  let queue = [{ board, count: 0 }];
  while (queue.length !== 0) {
    const { board: curBoard, count: curCount } = queue.shift();
    if (curCount > 5) continue;
    const curMax = findMax(curBoard);
    answer = answer > curMax ? answer : curMax;
    for (let i = 0; i < 4; i++) {
      const newBoard = Move(curBoard, dir[i]);
      const stringify = JSON.stringify(newBoard);
      if (!isVisited[stringify]) {
        isVisited[stringify] = true;
        queue.push({ board: newBoard, count: curCount + 1 });
      }
    }
  }
  console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const board = [];
  input.slice(1).forEach((v) => {
    board.push(v.split(" ").map(Number));
  });
  solution(board);
});
