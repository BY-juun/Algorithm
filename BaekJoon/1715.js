class MinHeap {
  heap;
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    let curIdx = this.heap.length - 1;
    let parentIdx = Math.floor((curIdx - 1) / 2);
    const { heap } = this;
    while (curIdx > 0 && heap[parentIdx] > heap[curIdx]) {
      this.swap(parentIdx, curIdx);
      curIdx = parentIdx;
      parentIdx = Math.floor((curIdx - 1) / 2);
    }
  }
  pop() {
    const { heap } = this;
    if (heap.length === 0) return undefined;
    if (heap.length === 1) return heap.shift();

    const result = heap[0];
    heap[0] = heap.pop();
    let idx = 0;

    while (true) {
      const originIdx = idx;
      let leftParentIdx = this.getLeftParentIdx(idx);
      let rightParentIdx = this.getRightParentIdx(idx);

      if (heap[leftParentIdx] < heap[idx]) idx = leftParentIdx;
      if (heap[rightParentIdx] < heap[idx]) idx = rightParentIdx;

      if (idx === originIdx) break;
      this.swap(originIdx, idx);
    }
    return result;
  }

  swap(idx1, idx2) {
    const temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }

  getLeftParentIdx(idx) {
    return idx * 2 + 1;
  }
  getRightParentIdx(idx) {
    return idx * 2 + 2;
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
