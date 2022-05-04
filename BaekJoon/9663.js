let n;
let answer = 0;
let pair = [];
const solve = (idx) => {
  if (idx === n) {
    answer++;
  }
  for (let i = 0; i < n; i++) {
    if (check([idx, i])) {
      pair.push([idx, i]);
      solve(idx + 1);
      pair.pop();
    }
  }
};

const check = ([x, y]) => {
  for (let temp of pair) {
    let [pairX, pairY] = temp;
    if (pairX === x || pairY === y) return false;
    if (Math.abs((pairX - x) / (pairY - y)) === 1) return false;
  }
  return true;
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  n = Number(input[0]);
  solve(0);
  console.log(answer);
});
