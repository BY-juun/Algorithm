let visited = Array.from({ length: 100001 }, () => 0);
function BFS(arr) {
  let queue = [];
  let answer = 0;
  queue.push([arr[0], 0]);
  visited[arr[0]] = 1;
  while (true) {
    let temp = queue.shift();
    let pos = temp[0];
    let count = temp[1];
    if (pos === arr[1]) {
      answer = count;
      break;
    }
    if (pos - 1 >= 0) {
      if (visited[pos - 1] === 0) {
        visited[pos - 1] = 1;
        queue.push([pos - 1, count + 1]);
      }
    }

    if (pos + 1 <= 100000) {
      if (visited[pos + 1] === 0) {
        visited[pos + 1] = 1;
        queue.push([pos + 1, count + 1]);
      }
    }

    if (2 * pos <= 100000) {
      if (visited[2 * pos] === 0) {
        visited[2 * pos] = 1;
        queue.push([2 * pos, count + 1]);
      }
    }
  }
  console.log(answer);
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
  input[0].split(" ").map((value) => arr.push(Number(value)));
  BFS(arr);
  process.exit();
});
