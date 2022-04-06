let tree;

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = Number(input[0]);
  input = input.slice(1);
  tree = Array.from({ length: n + 1 }, () => new Array());
  for (let x of input) {
    let [node1, node2] = x.split(" ").map(Number);
    tree[node1].push(node2);
    tree[node2].push(node1);
  }
  let check = Array.from({ length: n + 1 }, () => 0);
  check[1] = 1;
  let queue = [];
  for (let x of tree[1]) {
    check[x] = 1;
    queue.push(x);
  }
  while (queue.length !== 0) {
    let nextNode = queue.shift();
    for (let x of tree[nextNode]) {
      if (check[x]) continue;
      check[x] = nextNode;
      queue.push(x);
    }
  }
  check = check.slice(2);
  let result = "";
  check.forEach((value) => (result += value + "\n"));
  console.log(result);
});
