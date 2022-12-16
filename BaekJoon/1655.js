class Heap {
  heap;
  compareFn;
  constructor(compareFn) {
    this.heap = [];
    this.compareFn = compareFn;
  }
  push(val) {
    this.heap.push(val);
    let curIdx = this.heap.length - 1;
    let parentIdx = this.getParentIdx(curIdx);

    while (curIdx > 0 && this.compareFn(this.heap[curIdx], this.heap[parentIdx])) {
      this.swap(parentIdx, curIdx);
      curIdx = parentIdx;
      parentIdx = this.getParentIdx(curIdx);
    }
  }
  pop() {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.shift();
    const result = this.heap[0];
    this.heap[0] = this.heap.pop();

    let idx = 0;
    while (true) {
      const originIdx = idx;
      const leftChildIdx = this.getLeftChildIdx();
      const rightChildIdx = this.getRightChildIdx();
      console.log();
      if (this.compareFn(this.heap[idx], this.heap[leftChildIdx])) idx = leftChildIdx;
      if (this.compareFn(this.heap[idx], this.heap[rightChildIdx])) idx = rightChildIdx;

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
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftChildIdx(idx) {
    return idx * 2 + 1;
  }
  getRightChildIdx(idx) {
    return idx * 2 + 2;
  }
}

function solve(num) {
  const maxHeap = new Heap((a, b) => (a - b > 0 ? true : false));
  const minHeap = new Heap((a, b) => (b - a > 0 ? true : false));
  num.forEach((v) => {
    maxHeap.push(v);
    minHeap.push(v);
  });
  console.log(minHeap.heap);
  while (minHeap.heap.length !== 0) {
    console.log(minHeap.pop());
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const num = input.slice(1).map(Number);
  solve(num);
});
