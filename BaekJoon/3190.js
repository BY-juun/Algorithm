const dx = [0, -1, 1, 0];
const dy = [1, 0, 0, -1];

function ChangeDirection(dir, curDirection) {
  if (dir === "L") {
    if (curDirection === 0) return 1;
    else if (curDirection === 1) return 3;
    else if (curDirection === 2) return 0;
    else if (curDirection === 3) return 2;
  } else if (dir === "D") {
    if (curDirection === 0) return 2;
    else if (curDirection === 1) return 0;
    else if (curDirection === 2) return 3;
    else if (curDirection === 3) return 1;
  }
}

function MoveSnake(board, snake, curDirection) {
  const [headX, headY] = snake[0];
  const nextHeadX = headX + dx[curDirection];
  const nextHeadY = headY + dy[curDirection];
  if (nextHeadX < 0 || nextHeadY < 0 || nextHeadX >= board.length || nextHeadY >= board.length) return false;

  //사과가 아닌 경우
  snake.unshift([nextHeadX, nextHeadY]);
  const snakeStringify = snake.slice(1).map((v) => JSON.stringify(v));
  if (snakeStringify.includes(JSON.stringify(snake[0]))) return false;

  if (board[nextHeadX][nextHeadY] === 0) {
    snake.pop();
  } else {
    //사과인 경우
    board[nextHeadX][nextHeadY] = 0;
  }
  return true;
}

function solution(board, dir) {
  const snake = [[0, 0]];
  let curTime = 0;
  let curDirection = 0;
  while (true) {
    curTime++;
    if (!MoveSnake(board, snake, curDirection)) return curTime; //다음턴에 벽에 머리 밖으면 끝남.
    const checkChangeDir = dir.filter((v) => v[0] === curTime);
    if (checkChangeDir.length > 0) curDirection = ChangeDirection(checkChangeDir[0][1], curDirection);
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  const board = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  input = input.slice(1);
  const NumOfApple = Number(input[0]);
  input = input.slice(1);
  for (let i = 0; i < NumOfApple; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    board[x - 1][y - 1] = 1;
  }
  input = input.slice(NumOfApple);
  const NumOfChangeDir = Number(input[0]);
  const dir = [];
  input = input.slice(1);
  for (let i = 0; i < NumOfChangeDir; i++) {
    const [x, c] = input[i].split(" ");
    dir.push([Number(x), c]);
  }
  const answer = solution(board, dir);
  console.log(answer);
});
