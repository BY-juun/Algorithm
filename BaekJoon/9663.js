let queenPos;
let answer = 0;

function isOtherQueenInSameStraightLine(curX, curY) {
  for (const [x, y] of queenPos) {
    if (x === curX || y === curY) return true;
  }
  return false;
}

function isOtherQueenInSameDiagonalLine(curX, curY) {
  for (const [x, y] of queenPos) {
    if (Math.abs(x - curX) === Math.abs(y - curY)) return true;
  }
  return false;
}

function DFS(curRow, n) {
  if (curRow === n) return answer++;

  for (let col = 0; col < n; col++) {
    if (isOtherQueenInSameStraightLine(curRow, col)) continue;
    if (isOtherQueenInSameDiagonalLine(curRow, col)) continue;
    queenPos.push([curRow, col]);
    DFS(curRow + 1, n);
    queenPos.pop();
  }
}

function solve(n) {
  for (let col = 0; col < n; col++) {
    queenPos = [[0, col]];
    DFS(1, n);
  }
  console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  n = Number(input[0]);
  solve(n);
});
