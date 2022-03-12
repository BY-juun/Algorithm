const solve = (arr) => {
  let dp = Array.from({ length: arr.length }, () => 1);
  for (let i = 1; i < dp.length; i++) {
    const current = arr[i];
    const values = [1];
    for (let j = 0; j < i; j++) {
      const before = arr[j];
      if (current > before) values.push(dp[j] + 1);
    }
    dp[i] = Math.max(...values);
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
