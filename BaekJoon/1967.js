function BFS(board, n, start) {
  let isVisited = Array.from({ length: n }, () => false);
  const queue = [{ to: start, cost: 0 }];
  let maxNode = { node: 0, cost: 0 };
  while (queue.length !== 0) {
    const { to, cost } = queue.shift();
    const nextNodes = board[to];
    if (cost > maxNode.cost) maxNode = { node: to, cost };
    for (const { to: nextTo, cost: nextCost } of nextNodes) {
      if (isVisited[nextTo]) continue;
      queue.push({ to: nextTo, cost: nextCost + cost });
      isVisited[nextTo] = true;
    }
  }
  return maxNode;
}

function solve(board, n) {
  const oneSideNode = BFS(board, n, 0);
  const otherSideNode = BFS(board, n, oneSideNode.node);
  console.log(otherSideNode.cost);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  const board = Array.from({ length: n }, () => []);
  input.slice(1).forEach((v) => {
    const [from, to, cost] = v.split(" ").map(Number);
    board[from - 1].push({ to: to - 1, cost });
    board[to - 1].push({ to: from - 1, cost });
  });
  board.sort((a, b) => a.to - b.to);
  solve(board, n);
});
