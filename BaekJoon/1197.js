function getParent(parent, x) {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
}

function unionParent(parent, x, y) {
  const n1 = getParent(parent, x);
  const n2 = getParent(parent, y);
  if (n1 < n2) parent[n2] = n1;
  else parent[n1] = n2;
}

function findParent(parent, x, y) {
  const n1 = getParent(parent, x);
  const n2 = getParent(parent, y);
  if (n1 === n2) return true;
  else return false;
}

function solve(v, graph) {
  let answer = 0;
  graph.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: v + 1 }, (_, idx) => idx);
  for (const cost of graph) {
    if (!findParent(parent, cost[0], cost[1])) {
      answer += cost[2];
      unionParent(parent, cost[0], cost[1]);
    }
  }
  console.log(answer);
}

const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [v, e] = strToNum(input[0]);
  const graph = [];
  input.slice(1).forEach((v) => {
    graph.push(strToNum(v));
  });
  solve(v, graph);
});
