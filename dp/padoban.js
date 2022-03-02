const solve = (n) => {
  let dp = Array.from({ length: 100 }, () => 0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;
  dp[4] = 2;
  for (let i = 5; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }
  console.log(dp[n - 1]);
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  input = input.slice(1);
  for (let i = 0; i < n; i++) {
    solve(Number(input[i]));
  }
});
