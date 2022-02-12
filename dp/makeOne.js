const solve = (n) => {
  let dp = Array.from({ length: n + 1 }, () => 0);
  dp[2] = 1;
  dp[3] = 1;
  for (let i = 4; i <= n; i++) {
    if (i % 6 === 0) {
      //2,3 다 가능
      dp[i] = Math.min(...[dp[i / 2] + 1, dp[i / 3] + 1, dp[i - 1] + 1]);
    } else if (i % 3 === 0) {
      dp[i] = Math.min(...[dp[i / 3] + 1, dp[i - 1] + 1]);
    } else if (i % 2 === 0) {
      dp[i] = Math.min(...[dp[i / 2] + 1, dp[i - 1] + 1]);
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }
  console.log(dp[n]);
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = parseInt(input[0]);
  solve(n);
});
