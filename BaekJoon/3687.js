const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input.slice(1).map(Number));
});

function solution(arr) {
  const add = ["1", "7", "4", "2", "0", "8"];
  const dp = Array.from({ length: 101 }, () => Number.MAX_SAFE_INTEGER);

  findMinValue();

  arr.forEach((v) => {
    console.log(`${dp[v]} ${findMaxValue(v)}`);
  });

  function findMinValue() {
    dp[2] = 1;
    dp[3] = 7;
    dp[4] = 4;
    dp[5] = 2;
    dp[6] = 6;
    dp[7] = 8;
    dp[8] = 10;

    for (let i = 9; i <= 100; i++) {
      for (let j = 2; j <= 7; j++) {
        dp[i] = Math.min(BigInt(String(dp[i - j]) + add[j - 2]), dp[i]);
      }
    }
  }

  function findMaxValue(num) {
    if (num % 2 === 0) return Number("1".repeat(num / 2));
    else return Number("7" + "1".repeat((num - 3) / 2));
  }
}
