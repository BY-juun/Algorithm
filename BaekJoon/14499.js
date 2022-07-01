const TOP = 0;
const BOTTOM = 5;

function findNextPos(cmd, x, y, limitX, limitY) {
  let nextX, nextY;
  switch (cmd) {
    case 1:
      nextX = x;
      nextY = y + 1;
      break;
    case 2:
      nextX = x;
      nextY = y - 1;
      break;
    case 3:
      nextX = x - 1;
      nextY = y;
      break;
    case 4:
      nextX = x + 1;
      nextY = y;
      break;
  }
  return nextX >= 0 && nextY >= 0 && nextX < limitX && nextY < limitY ? { nextX, nextY } : false;
}

function Move_Dice(dice, cmd) {
  const newDice = Array.from({ length: 6 }, () => 0);
  switch (cmd) {
    case 1:
      newDice[TOP] = dice[3];
      newDice[1] = dice[1];
      newDice[2] = dice[TOP];
      newDice[3] = dice[BOTTOM];
      newDice[4] = dice[4];
      newDice[BOTTOM] = dice[2];
      break;
    case 2:
      newDice[TOP] = dice[2];
      newDice[1] = dice[1];
      newDice[2] = dice[BOTTOM];
      newDice[3] = dice[TOP];
      newDice[4] = dice[4];
      newDice[BOTTOM] = dice[3];
      break;
    case 3:
      newDice[TOP] = dice[4];
      newDice[1] = dice[TOP];
      newDice[2] = dice[2];
      newDice[3] = dice[3];
      newDice[4] = dice[BOTTOM];
      newDice[BOTTOM] = dice[1];
      break;
    case 4:
      newDice[TOP] = dice[1];
      newDice[1] = dice[BOTTOM];
      newDice[2] = dice[2];
      newDice[3] = dice[3];
      newDice[4] = dice[TOP];
      newDice[BOTTOM] = dice[4];
      break;
  }
  return newDice;
}

function solution(x, y, board, cmd) {
  //주사위를 나타낼 배열 -> 첫 번째 요소는 주사위 상단을, 마지막 요소를 주사위 바닥을 나타낸다.
  let dice = Array.from({ length: 6 }, () => 0);
  for (let i = 0; i < cmd.length; i++) {
    const next = findNextPos(cmd[i], x, y, board.length, board[0].length);
    //다음 이동할 영역이 맵 안에 없으면 건너뛴다.
    if (!next) continue;
    dice = Move_Dice(dice, cmd[i]);
    const { nextX, nextY } = next;
    if (board[nextX][nextY] === 0) board[nextX][nextY] = dice[BOTTOM];
    else {
      dice[BOTTOM] = board[nextX][nextY];
      board[nextX][nextY] = 0;
    }
    x = nextX;
    y = nextY;
    console.log(dice[TOP]);
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m, x, y, k] = input[0].split(" ").map(Number);
  input = input.slice(1);
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push(input[i].split(" ").map(Number));
  }
  input = input.slice(n);
  const cmd = input[0].split(" ").map(Number);
  solution(x, y, board, cmd);
});
