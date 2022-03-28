let n;
let arr;
const solve = (arr) => {
  let dp = Array.from({ length: arr[0].length }, () => Array.from({ length: 3 }, () => 0));
  dp[0][0] = 0;
  dp[0][1] = arr[0][0];
  dp[0][2] = arr[1][0];
  for (let i = 1; i < arr[0].length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = Math.max(dp[i - 1][2], dp[i - 1][0]) + arr[0][i];
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][0]) + arr[1][i];
  }
  let answer = Number.MIN_SAFE_INTEGER;
  for (let x of dp) {
    if (answer < Math.max(...x)) answer = Math.max(...x);
  }
  console.log(answer);
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  n = Number(input[0]);
  input = input.slice(1);
  for (let i = 0; i < n; i++) {
    input = input.slice(1);
    let temp = [];
    let arr = [];
    temp = input[0].split(" ").map((value) => Number(value));
    arr.push(temp);
    temp = input[1].split(" ").map((value) => Number(value));
    arr.push(temp);
    solve(arr);
    input = input.slice(2);
  }
});
