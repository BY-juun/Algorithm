const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let isCleanUp;

function GetNextDirection(curDirection) {
  curDirection = curDirection - 1;
  if (curDirection === -1) return 3;
  else return curDirection;
}

function solution(x, y, Direction, board) {
  let answer = 1;
  isCleanUp[x][y] = true;
  let nextDirection = Direction;
  while (true) {
    nextDirection = GetNextDirection(nextDirection);
    let count = 0;
    let gotoOtherBlock = true;
    while (true) {
      const nextX = x + dx[nextDirection];
      const nextY = y + dy[nextDirection];
      if (board[nextX][nextY] === 0 && !isCleanUp[nextX][nextY]) {
        break;
      }
      count++;
      if (count === 4) {
        gotoOtherBlock = false;
        break;
      }
      nextDirection = GetNextDirection(nextDirection);
    }

    //현재 위치에서 갈 수 있는 블럭이 없을 때ㅡ
    if (!gotoOtherBlock) {
      const nextX = x + dx[GetNextDirection(GetNextDirection(nextDirection))];
      const nextY = y + dy[GetNextDirection(GetNextDirection(nextDirection))];
      if (board[nextX][nextY] === 1) break;
      else {
        x = nextX;
        y = nextY;
        isCleanUp[x][y] = true;
        continue;
      }
    }
    //갈 수 있는 블럭이 있을 때
    answer++;
    x = x + dx[nextDirection];
    y = y + dy[nextDirection];
    isCleanUp[x][y] = true;
  }
  console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  isCleanUp = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
  input = input.slice(1);
  const [r, c, d] = input[0].split(" ").map(Number);
  const board = [];
  input.slice(1).forEach((v) => {
    board.push(v.split(" ").map(Number));
  });
  solution(r, c, d, board);
});
