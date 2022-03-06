let graph = [];
let isVisited;
const dx = [1, -1, 0, 0, -1, 1, -1, 1];
const dy = [0, 0, 1, -1, -1, 1, 1, -1];
let w, h;

function solve() {
  let answer = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1 && isVisited[i][j] === 0) {
        answer++;
        DFS(i, j);
      }
    }
  }
  console.log(answer);
}

function DFS(x, y) {
  for (let i = 0; i < 8; i++) {
    const nextX = x + dx[i];
    const nextY = y + dy[i];
    if (nextX >= 0 && nextX < h && nextY >= 0 && nextY < w) {
      if (graph[nextX][nextY] === 1 && isVisited[nextX][nextY] === 0) {
        isVisited[nextX][nextY] = 1;
        DFS(nextX, nextY);
      }
    }
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  while (true) {
    [w, h] = input[0].split(" ").map((value) => Number(value));
    if (w === 0 && h === 0) return;
    isVisited = Array.from({ length: h }, () => Array.from({ length: w }, () => 0));
    graph = [];
    input = input.slice(1);
    for (let i = 0; i < h; i++) {
      let temp = [];
      input[i].split(" ").map((value) => temp.push(Number(value)));
      graph.push(temp);
    }
    input = input.slice(h);
    solve();
  }
});
