const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function findPos(board, row, col) {
  const obj = {};
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === "R") obj.Red = [i, j];
      else if (board[i][j] === "B") obj.Blue = [i, j];
      else if (board[i][j] === "O") obj.Hole = [i, j];
    }
  }
  return obj;
}

function BFS(board, row, col) {
  const { Red, Blue, Hole } = findPos(board, row, col);
  const [rx, ry] = Red;
  const [bx, by] = Blue;
  const [hx, hy] = Hole;
  const isVisited = {};
  isVisited[JSON.stringify([rx, ry, bx, by])] = 1;
  let queue = [[rx, ry, bx, by, 1]];
  let answer = Number.MAX_SAFE_INTEGER;
  let isAnswerExist = false;

  while (queue.length !== 0) {
    const [rx, ry, bx, by, count] = queue.shift();
    if (count >= 10) continue;
    for (let i = 0; i < 4; i++) {
      let nextRx = rx;
      let nextRy = ry;
      let nextBx = bx;
      let nextBy = by;
      let redComplete = false;
      let blueComplete = false;
      while (true) {
        if (board[nextRx + dx[i]][nextRy + dy[i]] === "#") break;
        if (nextRx === hx && nextRy === hy) {
          redComplete = true;
          break;
        }
        nextRx += dx[i];
        nextRy += dy[i];
      }
      while (true) {
        if (board[nextBx + dx[i]][nextBy + dy[i]] === "#") break;
        if (nextBx === hx && nextBy === hy) {
          blueComplete = true;
          break;
        }
        nextBx += dx[i];
        nextBy += dy[i];
      }
      if (blueComplete) continue;
      if (redComplete && !blueComplete) {
        isAnswerExist = true;
        answer = answer > count ? count : answer;
      }

      if (nextRx === nextBx && nextRy === nextBy) {
        if (i === 0) {
          if (rx > bx) nextRx -= dx[i];
          else nextBx -= dx[i];
        } else if (i === 1) {
          if (ry > by) nextBy -= dy[i];
          else nextRy -= dy[i];
        } else if (i === 2) {
          if (rx > bx) nextBx -= dx[i];
          else nextRx -= dx[i];
        } else if (i === 3) {
          if (ry > by) nextRy -= dy[i];
          else nextBy -= dy[i];
        }
      }
      const stringify = JSON.stringify([nextRx, nextRy, nextBx, nextBy]);
      if (!isVisited[stringify] || isVisited[stringify] > count + 1) {
        isVisited[stringify] = count + 1;
        queue.push([nextRx, nextRy, nextBx, nextBy, count + 1]);
      }
    }
  }
  return isAnswerExist ? answer : -1;
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [row, col] = input[0].split(" ").map(Number);
  const board = [];
  input.slice(1).forEach((v) => {
    board.push(v.split(""));
  });
  const answer = BFS(board, row, col);
  console.log(answer);
});
