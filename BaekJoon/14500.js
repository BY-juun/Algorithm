const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];
const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", async function () {
  const graph = [];
  input.slice(1).forEach((row) => {
    graph.push(strToNum(row));
  });
});

function solve(graph) {
  let answer = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      const result = BFS(i, j, graph);
    }
  }
}

function BFS(i, j, graph) {
  let result = Number.MIN_SAFE_INTEGER;
  const row = graph.length;
  const col = graph[0].length;
  const isVisited = Array.from(
    { length: row },
    () => Array.from({ length: col }),
    () => false
  );
  isVisited[i][j] = true;
  const queue = [{ x: i, y: j, sum: 0, count: 0 }];
  while (queue.length !== 0) {
    const curPos = queue.shift();
    if (count === 4) {
      result = Math.max(result, curPos.sum);
      continue;
    }
    for (let dir = 0; dir < 4; dir++) {
      const nextX = curPos.x + dx[dir];
      const nextY = curPos.y + dy[dir];
      if (nextX >= 0 && nextX < row && nextY >= 0 && nextY < col) {
        if (!isVisited[nextX][nextY]) {
          queue.push({ x: nextX, y: nextY, sum: curPos.sum + graph[nextX][nextY], count: curPos.count + 1 });
        }
      }
    }
  }
}
