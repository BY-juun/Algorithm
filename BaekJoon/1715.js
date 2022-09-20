class MinHeap {
  heap;
  constructor() {
    this.heap = [];
  }
  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
  push(value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (idx > 0 && this.heap[parentIdx] > this.heap[idx]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }
  pop() {
    if (this.heap.length === 0) return undefined;
    else if (this.heap.length === 1) return this.heap.pop();

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();

    let idx = 0;

    while (true) {
      let leftParentIdx = idx * 2 + 1;
      let rightParentIdx = idx * 2 + 2;
      if (this.heap.length <= leftParentIdx) break;

      let nextIdx = idx;
      if (this.heap[leftParentIdx] < this.heap[nextIdx]) nextIdx = leftParentIdx;
      if (rightParentIdx < this.heap.length && this.heap[rightParentIdx] < this.heap[nextIdx]) nextIdx = rightParentIdx;

      if (nextIdx === idx) break;

      this.swap(idx, nextIdx);
      idx = nextIdx;
    }

    return result;
  }
}

function solution(pair) {
  let result = 0;
  const minHeap = new MinHeap();
  pair.forEach((node) => {
    minHeap.push(node);
  });

  //console.log(minHeap.heap);

  while (minHeap.heap.length > 1) {
    const firstPop = minHeap.pop();
    const SecondPop = minHeap.pop();
    result += firstPop + SecondPop;
    minHeap.push(firstPop + SecondPop);
  }
  return result;
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const pair = input.slice(1).map(Number);
  const result = solution(pair);
  console.log(result);
});
