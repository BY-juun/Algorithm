function getArea(low, high, grams) {
  if (low === high) return grams[low];
  const mid = Math.floor((low + high) / 2);
  const leftArea = getArea(low, mid, grams);
  const rightArea = getArea(mid + 1, high, grams);
  let max = Math.max(leftArea, rightArea);
  max = Math.max(max, getMidArea(low, high, mid, grams));
  return max;
}

function getMidArea(low, high, mid, grams) {
  let toLeft = mid;
  let toRight = mid;
  let height = grams[mid];
  let maxArea = height;

  while (low < toLeft && toRight < high) {
    if (grams[toLeft - 1] < grams[toRight + 1]) {
      toRight++;
      height = Math.min(height, grams[toRight]);
    } else {
      toLeft--;
      height = Math.min(height, grams[toLeft]);
    }
    maxArea = Math.max(maxArea, height * (toRight - toLeft + 1));
  }

  while (toRight < high) {
    toRight++;
    height = Math.min(height, grams[toRight]);
    maxArea = Math.max(maxArea, height * (toRight - toLeft + 1));
  }

  while (low < toLeft) {
    toLeft--;
    height = Math.min(height, grams[toLeft]);
    maxArea = Math.max(maxArea, height * (toRight - toLeft + 1));
  }
  return maxArea;
}

function solve(grams) {
  let low = 0;
  let high = grams.length - 1;
  let mid = Math.floor((high + low) / 2);
  const maxArea = getArea(low, high, grams);

  console.log(maxArea);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 0; i < input.length - 1; i++) {
    const grams = input[i].split(" ").map(Number).slice(1);
    solve(grams);
  }
});
