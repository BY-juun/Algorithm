const mod = BigInt(1000000000);
const solve = (n) => {
  let dp = Array.from({ length: n }, () => []);
  for (let i = 0; i < 10; i++) {
    if (i === 0) dp[0][0] = BigInt(0);
    else dp[0][i] = BigInt(1);
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 10; j++) {
      dp[i][j] = BigInt(0);
      if (j >= 1) dp[i][j] += dp[i - 1][j - 1];
      if (j < 9) dp[i][j] += dp[i - 1][j + 1];
      dp[i][j] = BigInt(dp[i][j]) % mod;
    }
  }
  console.log(String(dp[n - 1].reduce((acc, cur) => acc + cur) % mod));
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
