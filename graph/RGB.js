let graph = [];
let graph2 = [];
let isVisited = [];
let isVisited2 = [];
let numOfComputer;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];

function solve() {
  let answer1 = RGB();
  let answer2 = NonRGB();
  console.log(answer1, answer2);
}

function RGB() {
  let answer = 0;
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (isVisited[i][j] === 0) {
        answer++;
        DFS(i, j);
      }
    }
  }
  return answer;
}

function NonRGB() {
  let answer = 0;
  for (let i = 0; i < graph2.length; i++) {
    for (let j = 0; j < graph2[i].length; j++) {
      if (isVisited2[i][j] === 0) {
        answer++;
        DFS_NonRGB(i, j);
      }
    }
  }
  return answer;
}

function DFS(x, y) {
  for (let i = 0; i < 4; i++) {
    if (x + dx[i] >= 0 && x + dx[i] < graph.length && y + dy[i] >= 0 && y + dy[i] < graph.length) {
      if (graph[x][y] === graph[x + dx[i]][y + dy[i]] && isVisited[x + dx[i]][y + dy[i]] === 0) {
        isVisited[x + dx[i]][y + dy[i]] = 1;
        DFS(x + dx[i], y + dy[i]);
      }
    }
  }
}

function DFS_NonRGB(x, y) {
  for (let i = 0; i < 4; i++) {
    if (x + dx[i] >= 0 && x + dx[i] < graph2.length && y + dy[i] >= 0 && y + dy[i] < graph2.length) {
      if (graph2[x][y] === graph2[x + dx[i]][y + dy[i]] && isVisited2[x + dx[i]][y + dy[i]] === 0) {
        isVisited2[x + dx[i]][y + dy[i]] = 1;
        DFS_NonRGB(x + dx[i], y + dy[i]);
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
  let n = Number(input[0]);
  input = input.slice(1);
  for (let x of input) {
    let temp = [];
    let temp2 = [];
    let temp3 = [];
    let temp4 = [];
    x.split("").map((value) => {
      temp2.push(value);
      temp.push(0);
      temp4.push(0);
      if (value === "G") {
        temp3.push("R");
      } else {
        temp3.push(value);
      }
    });
    isVisited.push(temp);
    isVisited2.push(temp4);
    graph.push(temp2);
    graph2.push(temp3);
  }
  solve();
  process.exit();
});
