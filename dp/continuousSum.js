const solve = (arr) => {
  let dp = Array.from({ length: arr.length }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    dp[i] = arr[i];
    if (dp[i] < dp[i - 1] + arr[i]) dp[i] = dp[i - 1] + arr[i];
  }
  console.log(Math.max(...dp));
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input = input.slice(1);
  let arr = [];
  input[0].split(" ").map((value) => arr.push(Number(value)));
  solve(arr);
});
