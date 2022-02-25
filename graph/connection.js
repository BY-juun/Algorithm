let graph = [];
let isVisited = [];
function solve() {
  for (let i = 0; i < graph.length; i++) {}
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
