let graph = [];
let NoChicken = [];
let m, n;
let IsVisited;
const dx = [0, -1, 1, 0];
const dy = [-1, 0, 0, 1];
let answer = Number.MAX_SAFE_INTEGER;
function solve() {
  let count;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 2) {
        count = 1;
        combination(count, i, j);
      }
    }
  }
  console.log(answer);
}

function combination(count, x, y) {
  if (count > m) return;
  NoChicken[x][y] = 2;
  const findResult = findAnswer();
  if (findResult < answer) answer = findResult;
  const startPos = x * n + y;
  for (let i = startPos + 1; i < n * n; i++) {
    let tempX = parseInt(i / n);
    let tempY = parseInt(i % n);
    if (graph[tempX][tempY] === 2) {
      combination(count + 1, tempX, tempY);
    }
  }
  NoChicken[x][y] = 0;
}

function findAnswer() {
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (NoChicken[i][j] === 1) {
        Initialize();
        result += BFS(i, j);
      }
    }
  }
  return result;
}

function BFS(x, y) {
  let queue = [];
  queue.push([x, y]);
  IsVisited[x][y] = 1;

  while (queue.length !== 0) {
    let [xPos, yPos] = queue.shift();
    if (NoChicken[xPos][yPos] === 2) {
      return Math.abs(xPos - x) + Math.abs(yPos - y);
    }
    for (let i = 0; i < 4; i++) {
      if (xPos + dx[i] >= 0 && xPos + dx[i] < n && yPos + dy[i] >= 0 && yPos + dy[i] < n) {
        if (!IsVisited[xPos + dx[i]][yPos + dy[i]]) {
          IsVisited[xPos + dx[i]][yPos + dy[i]] = 1;
          queue.push([xPos + dx[i], yPos + dy[i]]);
        }
      }
    }
  }
}

function Initialize() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      IsVisited[i][j] = 0;
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
  [n, m] = input[0].split(" ").map((value) => parseInt(value));
  input = input.slice(1);
  IsVisited = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  for (let i = 0; i < n; i++) {
    let temp = [];
    let temp2 = [];
    input[i].split(" ").map((value) => temp.push(parseInt(value)));
    input[i].split(" ").map((value) => {
      if (Number(value) === 2) {
        temp2.push(0);
      } else {
        temp2.push(Number(value));
      }
    });
    NoChicken.push(temp2);
    graph.push(temp);
  }
  solve();
  process.exit();
});
