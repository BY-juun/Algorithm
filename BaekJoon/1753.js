function solution(start, board, arr) {
  let queue = [{ to: start, cost: 0 }];

  while (queue.length !== 0) {
    const { to } = queue.shift();
    board[to].forEach((next) => {
      if (arr[next.to] > arr[to] + next.cost) {
        arr[next.to] = arr[to] + next.cost;
        queue.push(next);
      }
    });
  }
  console.log(arr.join("\n"));
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const start = Number(input[1]);
  const arr = Array.from({ length: n }, () => Infinity);
  arr[start - 1] = 0;
  const board = Array.from({ length: n }, () => []);
  input.slice(2).forEach((i) => {
    const [u, v, w] = i.split(" ").map(Number);
    board[u - 1].push({ to: v - 1, cost: w });
  });
  solution(start - 1, board, arr);
});
