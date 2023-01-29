const dx = [-1, 0, 1];
const dy = [1, 1, 1];
let graph = [];
let isVisited = [];
let answer = 0;
let check = false;

const isInGraph = (i, j) => i >= 0 && i < graph.length && j >= 0 && j < graph[0].length;
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.slice(1).forEach((row) => {
    isVisited.push(Array.from({ length: row.length }, () => false));
    graph.push(row.split(""));
  });
  solve();
});

function solve() {
  for (let i = 0; i < graph.length; i++) {
    check = false;
    isVisited[i][0] = true;
    DFS(i, 0);
    // console.log(isVisited);
  }
  console.log(answer);
}

function DFS(i, j) {
  if (check) return;
  if (j === graph[0].length - 1) {
    answer++;
    check = true;
    return;
  }
  for (let idx = 0; idx < 3; idx++) {
    const nextX = i + dx[idx];
    const nextY = j + dy[idx];
    if (!isInGraph(nextX, nextY)) continue;
    if (graph[nextX][nextY] === "x") continue;
    if (isVisited[nextX][nextY]) continue;
    if (check) return;
    isVisited[i][j] = true;
    DFS(nextX, nextY);
  }
}
