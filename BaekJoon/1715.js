class Node {
  constructor(v) {
    this.v = v;
  }
}

class MinHeap {
  heap;
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(new Node(value));

    let idx = this.heap.length - 1;
    let parentIdx = this.getParentIdx(idx);

    while (idx > 0 && this.heap[idx].v < this.heap[parentIdx].v) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }

  size() {
    return this.heap.length;
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
      if (
        leftChildIdx < this.heap.length &&
        this.heap[idx].v > this.heap[leftChildIdx].v
      )
        idx = leftChildIdx;
      if (
        rightChildIdx < this.heap.length &&
        this.heap[idx].v > this.heap[rightChildIdx].v
      )
        idx = rightChildIdx;

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
  const minHeap = new MinHeap();
  pair.forEach((card) => minHeap.push(card));

  let answer = 0;

  while (minHeap.size() > 1) {
    const count = minHeap.pop().v + minHeap.pop().v;
    answer += count;
    minHeap.push(count);
  }

  console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const pair = input.slice(1).map(Number);
  solve(pair);
});
