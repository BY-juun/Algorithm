const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  const brokenButtons = strToNum(input[2]);
  solve(n, brokenButtons);
});

function solve(n, brokenButtons) {
  console.log(n);
  console.log(brokenButtons);
}
