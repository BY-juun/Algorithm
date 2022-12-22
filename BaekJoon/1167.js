function getMaxDistNode(startNode, graph) {
  const isVisited = Array.from({ length: graph.length }, () => false);
  isVisited[startNode] = true;
  const queue = [{ to: startNode, cost: 0 }];
  let maxNode = { to: startNode, cost: 0 };
  while (queue.length > 0) {
    const curNode = queue.shift();
    if (curNode.cost > maxNode.cost) maxNode = curNode;
    graph[curNode.to].forEach((v) => {
      const { to, cost } = v;
      if (!isVisited[to]) {
        isVisited[to] = true;
        queue.push({ to, cost: cost + curNode.cost });
      }
    });
  }
  return maxNode;
}

function solve(graph) {
  console.log(getMaxDistNode(getMaxDistNode(1, graph).to, graph).cost);
}

const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  const graph = Array.from({ length: n + 1 }, () => []);
  input.slice(1).forEach((v) => {
    const arr = strToNum(v);
    const node = arr[0];
    for (let i = 1; i < arr.length - 1; i += 2) {
      const to = arr[i];
      const cost = arr[i + 1];
      graph[node].push({ to, cost });
    }
  });
  solve(graph);
});
