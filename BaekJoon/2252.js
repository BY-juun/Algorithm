function solve(graph, inDegree, n) {
  const queue = [];
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length !== 0) {
    const value = queue.pop();
    result.push(value);
    graph[value].forEach((v) => {
      inDegree[v]--;
      if (inDegree[v] === 0) queue.push(v);
    });
  }
  console.log(result.join("\n"));
}

const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n] = strToNum(input[0]);
  const inDegree = Array.from({ length: n + 1 }, () => 0);
  const graph = Array.from({ length: n + 1 }, () => []);
  input.slice(1).forEach((v) => {
    const [prev, next] = strToNum(v);
    graph[prev].push(next);
    inDegree[next]++;
  });
  solve(graph, inDegree, n);
});
