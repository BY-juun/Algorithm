function solve(items) {
  let minDiff = Number.MAX_SAFE_INTEGER;
  items.sort((a, b) => a - b);
  let answer = [items[0], items[items.length - 1]];
  let left = 0;
  let right = items.length - 1;
  while (left < right) {
    const leftItem = items[left];
    const rightItem = items[right];
    const diff = leftItem + rightItem;
    if (minDiff > Math.abs(diff)) {
      minDiff = Math.abs(diff);
      answer = [leftItem, rightItem];
    }
    if (diff > 0) right--;
    else if (diff < 0) left++;
    else break;
  }
  console.log(answer.join(" "));
}

const strToBigInt = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const items = strToBigInt(input[1]);
  solve(items);
});
