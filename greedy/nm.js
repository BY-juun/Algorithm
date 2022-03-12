let n, m;
function solve(arr, cur, count) {
  if (count === m) {
    console.log(...arr);
    return;
  }
  if (cur > n) {
    return;
  } else {
    solve([...arr, cur], cur + 1, count + 1);
    solve(arr, cur + 1, count);
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

  solve([], 1, 0);
  process.exit();
});
