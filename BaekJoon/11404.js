const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  input = input.slice(2);
  const graph = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
  for (let i = 0; i < n; i++) {
    graph[i][i] = 0;
  }

  input.forEach((v) => {
    const [a, b, weight] = v.split(" ").map(Number);
    if (graph[a - 1][b - 1] > weight) graph[a - 1][b - 1] = weight;
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][j] > graph[i][k] + graph[k][j]) graph[i][j] = graph[i][k] + graph[k][j];
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === Infinity) graph[i][j] = 0;
    }
  }

  graph.forEach((v) => {
    console.log(v.join(" "));
  });
});
