const solve = (arr) => {
  let dp = Array.from({ length: arr.length }, () => Array.from({ length: 2 }, () => 0));
  dp[0][0] = arr[0];
  dp[0][1] = arr[0];
  if (arr.length === 1) {
    console.log(arr[0]);
    return;
  }
  dp[1][0] = arr[0] + arr[1];
  dp[1][1] = arr[1]; //0번째는 이전에서 온거, 1번째는 밑 두번쨰칸;
  for (let i = 2; i < arr.length; i++) {
    dp[i][0] = dp[i - 1][1] + arr[i];
    dp[i][1] = Math.max(dp[i - 2][0], dp[i - 2][1]) + arr[i];
  }
  console.log(Math.max(dp[arr.length - 1][0], dp[arr.length - 1][1]));
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = parseInt(input[0]);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Number(input[i + 1]));
  }
  solve(arr);
});
