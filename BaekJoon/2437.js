const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const items = input[1].split(" ").map(Number);
  solve(items);
});

function solve(items) {
  items.sort((a, b) => a - b);
  let sum = 0;
  for (const item of items) {
    if (sum + 1 < item) break;
    sum += item;
  }
  console.log(sum + 1);
}
