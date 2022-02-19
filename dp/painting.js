const solve = (arr) => {
  let dp = Array.from({ length: arr.length }, () => Array.from({ length: 3 }, () => 0));
  dp[0][0] = arr[0][0];
  dp[0][1] = arr[0][1];
  dp[0][2] = arr[0][2];
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
  }
  console.log(Math.min(...dp[dp.length - 1]));
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  input = input.slice(1);
  let arr = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    input[i].split(" ").map((value) => temp.push(parseInt(value)));
    arr.push(temp);
  }
  solve(arr);
});
