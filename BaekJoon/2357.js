function solve(graph, inDegree, n) {}

const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = strToNum(input[0]);
  input = input.slice(1);
  const number = [];
  const segmentTree = Array.from({ length: n + 1 }, () => 0);
  for (let i = 0; i < n; i++) number.push(Number(input[i]));
  input = input.slice(n);
  const makeSegmentTree = (node, start, end) => {
    if (start === end) return (segmentTree[node] = [number[start], number[start]]);
    const middle = Math.floor((start + end) / 2);
    //왼쪽 자식 세그먼트 트리 구축
    const leftResult = makeSegmentTree(node * 2, start, middle);

    //오른쪽 자식 세그먼트 트리 구축
    const rightResult = makeSegmentTree(node * 2 + 1, middle + 1, end);

    //결과를 루트노드에 저장
    return (segmentTree[node] = [Math.min(leftResult[0], rightResult[0]), Math.max(leftResult[1], rightResult[1])]);
  };

  const segmentTreeSum = (node, start, end, left, right) => {
    //구간안에 들어오지 못할 경우, 볼필요가 없음
    if (left > end || right < start) return [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

    //구간안에 들어올 경우, 해당 노드의 하위 노드는 구간안에 들어가 있으니까 해당 노드를 더함
    if (left <= start && end <= right) return segmentTree[node];

    //이제 나머지 경우는, 구간이 중간에 끼는경우
    const middle = Math.floor((start + end) / 2);
    console.log("1");
    const leftResult = segmentTreeSum(node * 2, start, middle, left, right);
    const rightResult = segmentTreeSum(node * 2 + 1, middle + 1, end, left, right);
    console.log(rightResult);
    //양쪽을 다 구해서 구하는 이유는 어차피 구간에서 벗어나는 경우는 0을 Return하기 때문.
    return [Math.min(leftResult[0], rightResult[0]), Math.max(leftResult[1], rightResult[1])];
  };

  makeSegmentTree(1, 0, number.length - 1);

  input.forEach((v) => {
    const [a, b] = strToNum(v);
    console.log(segmentTreeSum(0, number.length - 1, a, b));
  });
});
