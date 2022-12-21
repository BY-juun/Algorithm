function solve(grams) {}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m, k] = input[0].split(" ").map(Number);
  input = input.slice(1);
  const number = [];
  const segmentTree = Array.from({ length: n * 4 }, () => 0);
  for (let i = 0; i < n; i++) {
    number.push(BigInt(input[i]));
  }

  const makeSegmentTree = (node, start, end) => {
    if (start === end) return (segmentTree[node] = number[start]);
    const middle = Math.floor((start + end) / 2);
    const leftResult = makeSegmentTree(node * 2, start, middle);
    const rightResult = makeSegmentTree(node * 2 + 1, middle + 1, end);
    return (segmentTree[node] = BigInt(leftResult) + BigInt(rightResult));
  };

  makeSegmentTree(1, 0, number.length - 1);

  input = input.slice(n);

  const segmentTreeSum = (node, start, end, left, right) => {
    if (left > end || right < start) return 0;
    if (left <= start && end <= right) return segmentTree[node];
    const middle = Math.floor((start + end) / 2);
    const LeftSum = segmentTreeSum(node * 2, start, middle, left, right);
    const RightSum = segmentTreeSum(node * 2 + 1, middle + 1, end, left, right);
    return BigInt(LeftSum) + BigInt(RightSum);
  };

  const updateSegmentTree = (node, start, end, index, diff) => {
    if (index < start || index > end) return;
    segmentTree[node] += diff;
    if (start !== end) {
      const middle = Math.floor((start + end) / 2);
      updateSegmentTree(node * 2, start, middle, index, diff);
      updateSegmentTree(node * 2 + 1, middle + 1, end, index, diff);
    }
  };

  const answer = [];
  input.forEach((v) => {
    const [a, b, c] = v.split(" ").map(Number);
    if (a === 1) {
      const diff = BigInt(c) - number[b - 1];
      number[b - 1] = BigInt(c);
      updateSegmentTree(1, 0, number.length - 1, b - 1, diff);
    } else {
      answer.push(segmentTreeSum(1, 0, number.length - 1, b - 1, c - 1));
    }
  });
  console.log(answer.join("\n"));
});
