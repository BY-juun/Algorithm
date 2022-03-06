let graph = [];
let isVisited = [];
let row, col;
let tempArr;
let direction;
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

const solve = () => {
  let totalLength = row * col;
  let answer = 0;
  for (let i = 0; i < totalLength; i++) {
    //console.log(graph);
    if (graph[i] === 0) {
      graph[i] = 1; //벽 세우기
      for (let j = i + 1; j < totalLength; j++) {
        if (graph[j] === 0) {
          graph[j] = 1; //벽 세우기
          for (let k = j + 1; k < totalLength; k++) {
            if (graph[k] === 0) {
              graph[k] = 1; //벽 세우기 (3개 다 세움)
              tempArr = [...graph];

              spreadVirus();
              const result = findSafeArea();
              if (result > answer) answer = result;
            }
            graph[k] = 0;
          }
        }
        graph[j] = 0;
      }
    }
    graph[i] = 0;
  }
  console.log(answer);
};

const spreadVirus = () => {
  for (let i = 0; i < row * col; i++) {
    if (tempArr[i] === 2) {
      DFS(i);
    }
  }
};

const DFS = (pos) => {
  let xPos = pos / col;
  let yPos = pos % col;
  for (let i = 0; i < 4; i++) {
    if (xPos + dx[i] >= 0 && xPos + dx[i] < row && yPos + dy[i] >= 0 && yPos + dy[i] < col) {
      let findPos = (xPos + dx[i]) * col + (yPos + dy[i]);
      if (tempArr[findPos] === 0) {
        tempArr[findPos] = 2;
        DFS(findPos);
      }
    }
  }
};

const findSafeArea = () => {
  let safeArea = 0;
  for (let i = 0; i < row * col; i++) {
    if (tempArr[i] === 0) safeArea++;
  }
  return safeArea;
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  [row, col] = input[0].split(" ").map((value) => Number(value));
  input = input.slice(1);
  for (let i = 0; i < row; i++) {
    input[i].split(" ").map((value) => {
      graph.push(Number(value));
      isVisited.push(Number(value));
    });
  }
  direction = [col, -col, +1, -1];
  solve();
  process.exit();
});
