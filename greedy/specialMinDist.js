let n, e;
let arr = [];
let should = [];
let answer = Number.MAX_SAFE_INTEGER;
let isVisited;
function solve() {
  for (let i = 0; i < arr.length; i++) {
    let acc = 0;
    let accDist = [];
    if (arr[i][0] === 1) {
      accDist.push(JSON.stringify([arr[i][0], arr[i][1]]));
      DFS(arr[i][1], acc + arr[i][2], accDist);
    } else if (arr[i][1] === 1) {
      accDist.push(JSON.stringify([arr[i][1], arr[i][0]]));
      DFS(arr[i][0], acc + arr[i][2]);
    }
  }
  console.log(answer);
}

function DFS(pos, acc, accDist) {
  if (pos === n) {
    if (accDist.indexOf(JSON.stringify(should)) >= 0 || accDist.indexOf(JSON.stringify(should.reverse()))) {
      if (answer > acc) answer = acc;
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === pos) {
        accDist.push(JSON.stringify([arr[i][0], arr[i][1]]));
        DFS(arr[i][1], acc + arr[i][2], accDist);
      } else if (arr[i][1] === pos) {
        accDist.push(JSON.stringify([arr[i][1], arr[i][0]]));
        DFS(arr[i][0], acc + arr[i][2], accDist);
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
  [n, e] = input[0].split(" ").map((value) => Number(value));
  input = input.slice(1);
  for (let i = 0; i < e; i++) {
    let temp = input[i].split(" ").map((value) => Number(value));
    arr.push(temp);
  }
  input[e].split(" ").map((value) => should.push(Number(value)));
  solve();
});
