let graph = [];
let isVisited;
let dx = [0, -1, 1, 0];
let dy = [-1, 0, 0, 1];

function solve() {
  let answer = 0;
  let num = [];
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (graph[i][j] && !isVisited[i][j]) {
        answer++;
        const numOfpart = BFS(i, j);
        num.push(numOfpart);
      }
    }
  }
  console.log(answer);
  num.sort((a, b) => a - b);
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
  }
}

function BFS(i, j) {
  let queue = [];
  queue.push([i, j]);
  let answer = 0;
  while (queue.length !== 0) {
    let temp = queue.shift();
    const x = temp[0],
      y = temp[1];
    if (isVisited[x][y]) continue;
    isVisited[x][y] = 1;
    answer++;
    for (let k = 0; k < 4; k++) {
      if (x + dx[k] >= 0 && y + dy[k] >= 0 && x + dx[k] < graph.length && y + dy[k] < graph.length) {
        if (graph[x + dx[k]][y + dy[k]] && !isVisited[x + dx[k]][y + dy[k]]) {
          queue.push([x + dx[k], y + dy[k]]);
        }
      }
    }
  }
  return answer;
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
  let n = Number(input[0]);
  input = input.slice(1);
  for (let i = 0; i < n; i++) {
    let temp = [];
    input[i].split("").map((value) => temp.push(Number(value)));
    graph.push(temp);
  }
  isVisited = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  solve();
  process.exit();
});
