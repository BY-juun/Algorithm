let graph = [];
let isVisited;
let numOfComputer;
let bridge;

function solve() {
  isVisited[1] = 1;
  for (let i = 0; i < bridge; i++) {
    if (graph[i][0] === 1 && !isVisited[graph[i][1]]) {
      DFS(graph[i][1]);
    }
    if (graph[i][1] === 1 && !isVisited[graph[i][0]]) {
      DFS(graph[i][0]);
    }
  }
  isVisited = isVisited.filter((value) => value === 1);
  console.log(isVisited.length - 1);
}

function DFS(n) {
  isVisited[n] = 1;
  for (let i = 0; i < bridge; i++) {
    if (graph[i][0] === n && !isVisited[graph[i][1]]) DFS(graph[i][1]);
    if (graph[i][1] === n && !isVisited[graph[i][0]]) DFS(graph[i][0]);
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
  numOfComputer = Number(input[0]);
  bridge = Number(input[1]);
  input = input.slice(2);
  isVisited = Array.from({ length: numOfComputer }, () => 0);
  for (let i = 0; i < bridge; i++) {
    let temp = [];
    input[i].split(" ").map((value) => temp.push(Number(value)));
    graph.push(temp);
  }
  solve();
  process.exit();
});
