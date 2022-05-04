let str1, str2;
const solve = () => {
  let dp = Array.from({ length: str1.length + 1 }, () => Array.from({ length: str2.length + 1 }, () => 0));
  for (let i = 1; i < str1.length + 1; i++) {
    let word1 = str1[i - 1];
    for (let j = 1; j < str2.length + 1; j++) {
      let word2 = str2[j - 1];
      if (word1 === word2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  console.log(dp[str1.length][str2.length]);
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  str2 = input[0];
  str1 = input[1];
  solve();
});
