const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, k] = strToNum(input[0]);
  const arr = input.slice(1).map(Number);
  solve(arr, k);
});

function solve(coins, k) {
  const dp = Array.from({ length: k + 1 }, () => 0);
  dp[0] = 1;
  coins.forEach((coin) => {
    for (let i = coin; i <= k; i++) {
      dp[i] += dp[i - coin];
    }
  });
  console.log(dp[k]);
}
