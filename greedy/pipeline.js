let graph = [];
let isVisited = [];
let row;
let col;
let dx = [-1, 0, 1];
let dy = [1, 1, 1];
let answer;

const solve = () => {
  for (let i = 0; i < graph.length; i++) {
    DFS(i, 0);
  }

  console.log(answer);
};

function DFS(i, j) {
  isVisited[i][j] = 1;
  if (j === col - 1) {
    answer[i] = 1;
    return;
  }
  for (let k = 0; k < 3; k++) {
    if (i + dx[k] >= 0 && i + dx[k] < row && j + dy[k] >= 0 && j + dy[k] < col) {
      if (graph[i + dx[k]][j + dy[k]] === 0 && isVisited[i + dx[k]][j + dy[k]] === 0) {
        DFS(i + dx[k], j + dy[k]);
      }
    }
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = [];
  input[0].split(" ").map((val) => arr.push(Number(val)));
  row = arr[0];
  answer = Array.from({ length: row }, () => 0);
  col = arr[1];
  input = input.slice(1);
  for (let i = 0; i < row; i++) {
    let temp = [];
    let temp2 = [];
    input[i].split("").map((value) => {
      if (value === ".") temp.push(0);
      else temp.push(1);
      temp2.push(0);
    });
    graph.push(temp);
    isVisited.push(temp);
  }
  solve();
});
