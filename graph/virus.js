let graph = [];
let temp;
let isVisited = [];
let tempIsVisted = [];
let row;
let col;
let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];

const solve = () => {
  let answer = 0;
  let num;
  temp = graph;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (temp[i][j] === 0) {
        temp[i][j] = 1;
        for (let k = i; k < row; k++) {
          for (let u = j; u < col; u++) {
            if (temp[k][u] === 0) {
              temp[k][u] = 1;
              for (let p = k; p < row; p++) {
                for (let q = u; q < col; q++) {
                  if (temp[p][q] === 0) {
                    temp[p][q] = 1;
                    console.log(temp);
                    copy();
                    virus();
                    num = findSafeArea();
                    //console.log(num);
                    if (num > answer) answer = num;
                  }
                  temp[p][q] = 0;
                }
              }
            }
            temp[k][u] = 0;
          }
        }
      }
      temp[i][j] = 0;
    }
  }
  console.log(answer);
};

const copy = () => {
  for (let i = 0; i < row; i++) {
    tempIsVisted[i] = [...temp[i]];
  }
};

const virus = () => {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (tempIsVisted[i][j] === 2) {
        BFS(i, j);
      }
    }
  }
};

const BFS = (i, j) => {
  let queue = [];
  queue.push([i, j]);
  while (queue.length > 0) {
    let [x, y] = queue.shift();
    for (let t = 0; t < 4; t++) {
      if (x + dx[t] >= 0 && y + dy[t] >= 0 && x + dx[t] < row && y + dy[t] < col) {
        if (tempIsVisted[x + dx[t]][y + dy[t]] === 0) {
          tempIsVisted[x + dx[t]][y + dy[t]] = 2;
          queue.push([x + dx[t], y + dy[t]]);
        }
      }
    }
  }
};

const findSafeArea = () => {
  let safeZone = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (tempIsVisted[i][j] === 0) safeZone++;
    }
  }
  return safeZone;
};

const { copyFile } = require("fs");
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
    let temp = [];
    input[i].split(" ").map((value) => temp.push(Number(value)));
    graph.push(temp);
    isVisited.push(temp);
    tempIsVisted.push(temp);
  }
  solve();
  process.exit();
});
