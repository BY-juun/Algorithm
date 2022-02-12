const solve = (n) => {
  if (n === 0) {
    console.log("1 0");
    return;
  } else if (n === 1) {
    console.log("0 1");
    return;
  }
  let dp0 = Array.from({ length: n + 1 }, () => 0);
  let dp1 = Array.from({ length: n + 1 }, () => 0);
  dp0[0] = 1;
  dp1[0] = 0;
  dp0[1] = 0;
  dp1[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp0[i] = dp0[i - 1] + dp0[i - 2];
    dp1[i] = dp1[i - 1] + dp1[i - 2];
  }
  console.log(dp0[n], dp1[n]);
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = parseInt(input[0]);
  input = input.slice(1);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Number(input[i]));
  }
  for (let i = 0; i < n; i++) {
    solve(arr[i]);
  }
});
