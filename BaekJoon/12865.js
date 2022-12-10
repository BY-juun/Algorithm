function solve(limit, items) {
  const itemsCount = items.length;
  const minWeight = items[0].weight;
  const dp = Array.from({ length: itemsCount + 1 }, () => Array.from({ length: limit + 1 }, () => 0));

  for (let i = 1; i <= itemsCount; i++) {
    const { weight, value } = items[i - 1];
    for (let j = minWeight; j <= limit; j++) {
      if (j >= weight) dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
      else dp[i][j] = dp[i - 1][j];
    }
  }
  console.log(dp[itemsCount][limit]);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, k] = input[0].split(" ").map(Number);
  const items = [];
  input.slice(1).forEach((i) => {
    const [weight, value] = i.split(" ").map(Number);
    items.push({ weight, value });
  });
  items.sort((a, b) => a.weight - b.weight);
  solve(k, items);
});
