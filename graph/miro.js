let graph = [];
let visited;
let answer = Number.MAX_SAFE_INTEGER;
let dest_x, dest_y;
const dx = [0, -1, 1, 0];
const dy = [-1, 0, 0, 1];
function BFS() {
  let queue = [];
  queue.push([0, 0]);
  visited[0][0] = 1;
  while (queue.length !== 0) {
    let temp = queue.shift();
    const n = temp[0],
      m = temp[1];
    for (let i = 0; i < 4; i++) {
      if (
        n + dx[i] >= 0 &&
        n + dx[i] <= dest_x - 1 &&
        m + dy[i] >= 0 &&
        m + dy[i] <= dest_y - 1
      ) {
        if (graph[n + dx[i]][m + dy[i]] && !visited[n + dx[i]][m + dy[i]]) {
          visited[n + dx[i]][m + dy[i]] = visited[n][m] + 1;
          queue.push([n + dx[i], m + dy[i]]);
        }
      }
    }
  }
  console.log(visited[dest_x - 1][dest_y - 1]);
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
  let arr = [];
  input[0].split(" ").map((value) => arr.push(parseInt(value)));
  dest_x = arr[0];
  dest_y = arr[1];
  input = input.slice(1);
  for (let i = 0; i < dest_x; i++) {
    let temp = [];
    input[i].split("").map((value) => temp.push(parseInt(value)));
    graph.push(temp);
  }
  visited = Array.from({ length: dest_x }, () =>
    Array.from({ length: dest_y }, () => 0)
  );
  BFS();
  process.exit();
});
