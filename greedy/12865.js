let n, m;
let arr = [];
let answer = Number.MIN_SAFE_INTEGER;
const solve = () => {
  //   if (idx === arr.length || remain === 0) {
  //     if (answer < sum) {
  //       answer = sum;
  //       return;
  //     }
  //   }
  //   for (let i = idx; i < arr.length; i++) {
  //     if (remain - arr[i][0] >= 0) {
  //       solve(i + 1, remain - arr[i][0], sum + arr[i][1]);
  //       solve(i + 1, remain, sum);
  //     }
  //   }
  let dp = Array.from({ length: m }, () => 0);
  for (let i = arr[0][0]; i < m; i++) {}
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  [n, m] = input[0].split(" ").map((value) => Number(value));
  input = input.slice(1);
  for (let x of input) {
    let temp = x.split(" ").map((value) => Number(value));
    arr.push(temp);
  }
  arr.sort((a, b) => a - b);
  solve();
  //console.log(answer);
});
