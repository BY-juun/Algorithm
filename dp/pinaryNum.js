const solve = (n) => {
  let dp = Array.from({ length: 90 }, () => Array.from({ length: 2 }, () => 0));
  dp[0][0] = BigInt(0);
  dp[0][1] = BigInt(1);
  if (n > 90) return;
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
    dp[i][1] = dp[i - 1][0];
  }
  console.log(String(dp[n - 1][0] + dp[n - 1][1]));
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  solve(n);
});
