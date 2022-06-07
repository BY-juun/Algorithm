let N, M, H;
let answer = -1;

function copyGraph(graph) {
  let copy = [];
  for (const row of graph) {
    copy.push([...row]);
  }
  return copy;
}

function topDown(graph, line) {
  let curLine = line;
  for (let j = 1; j < H + 1; j++) {
    if (graph[j][curLine] === 1) curLine = curLine + 1;
    else if (graph[j][curLine - 1] === 1) curLine = curLine - 1;
  }
  return curLine === line ? true : false;
}

function IsAnswer(graph) {
  for (let i = 1; i < N; i++) {
    if (!topDown(graph, i)) return false;
  }
  return true;
}

function setRowLine(graph, curNum, targetNum) {
  for (let i = 1; i < H + 1; i++) {
    for (let j = 1; j < N; j++) {
      if (answer !== -1) return;
      let check = false;
      if (graph[i][j] !== 1) {
        if (j === 1) {
          if (graph[i][j + 1] !== 1) check = true;
        } else if (j === N) {
          if (graph[i][j - 1] !== 1) check = true;
        } else {
          if (graph[i][j + 1] !== 1 && graph[i][j - 1] !== 1) check = true;
        }
      }
      if (check) {
        if (curNum === targetNum) {
          graph[i][j] = 1;
          if (IsAnswer(graph)) {
            if (answer === -1) answer = targetNum;
          }
          graph[i][j] = 0;
        } else {
          graph[i][j] = 1;
          setRowLine(graph, curNum + 1, targetNum);
          graph[i][j] = 0;
        }
      }
    }
  }
}

function solution(graph) {
  if (IsAnswer(graph)) {
    answer = 0;
    return;
  }
  for (let line = 1; line <= 3; line++) {
    if (answer !== -1) return;
    const copiedGraph = copyGraph(graph);
    setRowLine(copiedGraph, 1, line);
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  [N, M, H] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: H + 1 }, () => Array.from({ length: N }, () => 0));
  input.slice(1).forEach((v) => {
    const [a, b] = v.split(" ");
    graph[a][b] = 1;
  });
  solution(graph);
  console.log(answer);
});
