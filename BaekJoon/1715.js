class MinHeap {
  heap;
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);

    let idx = this.heap.length - 1;
    let parentIdx = this.getParentIdx(idx);

    while (idx > 0 && this.heap[idx] < this.heap[parentIdx]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }

  pop() {
    if (this.heap.length === 0) throw Error();
    else if (this.heap.length === 1) return this.heap.shift();

    const result = this.heap[0];

    this.heap[0] = this.heap.pop();

    let originIdx = 0;
    let idx = 0;
    let leftChildIdx = this.getLeftChildIdx(idx);
    let rightChildIdx = this.getRightChildIdx(idx);

    while (true) {
      if (leftChildIdx < this.heap.length && this.heap[idx] > this.heap[leftChildIdx]) idx = leftChildIdx;
      if (rightChildIdx < this.heap.length && this.heap[idx] > this.heap[rightChildIdx]) idx = rightChildIdx;

      if (idx === originIdx) break;
      this.swap(idx, originIdx);
      originIdx = idx;
      leftChildIdx = this.getLeftChildIdx(idx);
      rightChildIdx = this.getRightChildIdx(idx);
    }

    return result;
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
  swap(idx1, idx2) {
    const temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }
}
function solve(pair) {
  let result = 0;
  const minHeap = new MinHeap();
  pair.forEach((num) => minHeap.push(num));

  while (minHeap.heap.length !== 1) {
    const newPair = minHeap.pop() + minHeap.pop();
    result += newPair;
    minHeap.push(newPair);
  }

  console.log(result);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const pair = input.slice(1).map(Number);
  solve(pair);
});
