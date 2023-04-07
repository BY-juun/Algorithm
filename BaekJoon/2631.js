/* eslint-disable no-undef */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const children = input.slice(1).map(Number);
  solution(children);
});

function solution(children) {
  const dp = Array.from({ length: children.length }, () => 1);

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (children[j] < children[i]) dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }

  console.log(children.length - Math.max(...dp));
}
