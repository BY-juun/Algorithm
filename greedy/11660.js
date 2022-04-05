let n, m;
let arr = [];
let answer = [];
let dp;
let x1, x2, y1, y2;
const solve = () => {
  answer.push(dp[x2][y2] + dp[x1 - 1][y1 - 1] - dp[x1 - 1][y2] - dp[x2][y1 - 1]);
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  [n, m] = input[0].split(" ").map((value) => Number(value));
  dp = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
  for (let i = 1; i <= n; i++) {
    input[i].split(" ").forEach((value, index) => {
      dp[i][index + 1] = dp[i - 1][index + 1] + dp[i][index] - dp[i - 1][index] + Number(value);
    });
  }
  input = input.slice(n + 1);
  for (let i = 0; i < m; i++) {
    [x1, y1, x2, y2] = input[i].split(" ").map((value) => Number(value));
    solve();
  }
  console.log(answer.join("\n"));
});
