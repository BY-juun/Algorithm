let isVisited;
const graph = [];
let row;
let col;
let answer = Number.MIN_SAFE_INTEGER;

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];
const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", async function () {
  input.slice(1).forEach((row) => {
    graph.push(strToNum(row));
  });
  solve();
});

function solve() {
  row = graph.length;
  col = graph[0].length;
  isVisited = Array.from(
    { length: row },
    () => Array.from({ length: col }),
    () => false
  );

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      isVisited[i][j] = true;
      DFS(i, j, 0, 0);
      isVisited[i][j] = false;
    }
  }
}

function DFS(i, j, sum, count) {
  if (count === 4) return (answer = Math.max(sum, answer));
  for (let dir = 0; dir < 4; dir++) {
    const nextX = i + dx[dir];
    const nextY = j + dy[dir];
    if (nextX < 0 || nextX >= row || nextY < 0 || nextY >= col) continue;
    if (isVisited[nextX][nextY]) continue;
    isVisited[nextX][nextY] = true;
    DFS(nextX, nextY, sum + graph[nextX][nextY], count + 1);
    isVisited[nextX][nextY] = false;
  }
}
