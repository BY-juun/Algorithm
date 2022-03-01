let graph = [];
let isVisited = [];
function solve() {
  let answer = 0;
  for (let i = 0; i < graph.length; i++) {
    if (isVisited[graph[i][0]] === 0) {
      // 아직 방문하지 않은 노드이면,
      isVisited[graph[i][0]] = 1;
      answer++;
      DFS(graph[i][0]);
    }
    if (isVisited[graph[i][1] === 0]) {
      isVisited[graph[i][1]] = 1;
      answer++;
      DFS(graph[i][1]);
    }
  }
  console.log(answer);
}

function DFS(pos) {
  for (let i = 0; i < graph.length; i++) {
    if (graph[i][0] === pos && isVisited[graph[i][1]] === 0) {
      isVisited[graph[i][1]] = 1;
      DFS(graph[i][1]);
    }
    if (graph[i][1] === pos && isVisited[graph[i][0]] === 0) {
      isVisited[graph[i][0]] = 1;
      DFS(graph[i][0]);
    }
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, m] = input[0].split(" ").map((el) => parseInt(el));
  input = input.slice(1);
  isVisited = Array.from({ length: n }, () => 0);
  for (let i = 0; i < m; i++) {
    let temp = [];
    input[i].split(" ").map((value) => temp.push(Number(value)));
    graph.push(temp);
  }
  solve();
  process.exit();
});
