let graph = [];
let isVisited;
let answer = [];
let row;
let col;
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

function solve() {
  let result = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (graph[i][j] && !isVisited[i][j]) {
        BFS(i, j);
        result++;
      }
    }
  }
  answer.push(result);
}

function BFS(i, j) {
  let queue = [];
  queue.push([i, j]);
  isVisited[i][j] = 1;
  while (queue.length !== 0) {
    let temp = queue.shift();
    const rowPos = temp[0],
      colPos = temp[1];
    for (let i = 0; i < 4; i++) {
      if (rowPos + dx[i] >= 0 && rowPos + dx[i] < row && colPos + dy[i] >= 0 && colPos + dy[i] < col) {
        if (graph[rowPos + dx[i]][colPos + dy[i]] && !isVisited[rowPos + dx[i]][colPos + dy[i]]) {
          queue.push([rowPos + dx[i], colPos + dy[i]]);
          isVisited[rowPos + dx[i]][colPos + dy[i]] = 1;
        }
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
  const n = Number(input[0]);
  input = input.slice(1);
  for (let i = 0; i < n; i++) {
    graph = [];
    isVisited = [];
    let temp = [];
    input[0].split(" ").map((value) => temp.push(Number(value)));
    row = temp[0];
    col = temp[1];
    const num = temp[2];
    graph = Array.from({ length: row }, () => Array.from({ length: col }, () => 0));
    isVisited = Array.from({ length: row }, () => Array.from({ length: col }, () => 0));
    input = input.slice(1);
    for (let j = 0; j < num; j++) {
      let temp2 = [];
      input[j].split(" ").map((value) => temp2.push(value));
      graph[temp2[0]][temp2[1]] = 1;
    }
    input = input.slice(num);
    solve();
  }
  for (let x of answer) {
    console.log(x);
  }
  process.exit();
});
