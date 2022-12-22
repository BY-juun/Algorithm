function solve(s1, s2) {
  const dp = Array.from({ length: s1.length + 1 }, () => Array.from({ length: s2.length + 1 }, () => 0));
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp[s1.length][s2.length]);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const str1 = input[0];
  const str2 = input[1];
  solve(str1, str2);
});
