let graph = [];
let chicken = [];
let m, n;
let answer = Number.MAX_SAFE_INTEGER;

function solve() {
  let count = 0;
  let idx = 0;
  let arr = [];
  combination(arr, count, idx);
}

function combination(arr, count, idx) {
  if (idx >= chicken.length) return;
  if (count >= m) return;
  arr.push(chicken[idx]);
  findDist(arr);
  combination(arr, count + 1, idx + 1);
  arr.pop();
  combination(arr, count, idx + 1);
}

function findDist(arr) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        let temp = Number.MAX_SAFE_INTEGER;
        for (let chic of arr) {
          const [xPos, yPos] = chic;
          const dist = Math.abs(xPos - i) + Math.abs(yPos - j);
          if (dist < temp) temp = dist;
        }
        result += temp;
      }
    }
  }
  if (result < answer) answer = result;
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
    let temp = input[i].split(" ").map((value) => Number(value));
    graph.push(temp);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 2) {
        chicken.push([i, j]);
        graph[i][j] = 0;
      }
    }
  }
  solve();
  console.log(answer);
  process.exit();
});
