let n, m;
let list;
let answer = [];
function solve(arr, prevIdx, count) {
  if (count === m) {
    answer.push([...arr]);
  } else {
    for (let i = prevIdx; i < list.length; i++) {
      solve([...arr, list[i]], i, count + 1);
    }
  }
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
  [n, m] = input[0].split(" ").map((value) => Number(value));
  list = input[1].split(" ").map((value) => Number(value));
  list.sort((a, b) => a - b);
  solve([], 0, 0);
  for (let x of answer) {
    console.log(...x);
  }
  process.exit();
});
