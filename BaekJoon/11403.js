const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  input = input.slice(1);
  const graph = [];
  input.forEach((v) => {
    graph.push(v.split(" ").map(Number));
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][j] === 0) {
          if (graph[i][k] === 1 && graph[k][j] === 1) graph[i][j] = 1;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    console.log(graph[i].join(" "));
  }
});
