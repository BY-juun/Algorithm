//위상정렬 + 우선순위큐
class Node {
  constructor(v, w) {
    this.v = v;
    this.w = w;
  }
}

class MaxHeap {
  heap;
  constructor() {
    this.heap = [];
  }

  push(v, w) {
    this.heap.push(new Node(v, w));

    let idx = this.heap.length - 1;
    let parentIdx = this.getParentIdx(idx);

    while (idx > 0 && this.heap[idx].v > this.heap[parentIdx].v) {
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
        this.heap[idx].v < this.heap[leftChildIdx].v
      )
        idx = leftChildIdx;
      if (
        rightChildIdx < this.heap.length &&
        this.heap[idx].v < this.heap[rightChildIdx].v
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

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, k] = input[0].split(" ").map(Number);
  const gems = input.slice(1, n + 1).map((row) => {
    return row.split(" ").map(Number);
  });
  const bags = input
    .slice(n + 1, n + k + 1)
    .map((limit) => ({ limit: Number(limit), result: 0 }));

  solution(gems, bags);
});

function solution(gems, bags) {
  const maxHeap = new MaxHeap();

  gems.forEach(([w, v]) => {
    maxHeap.push(v, w);
  });

  while (maxHeap.size()) {
    const { v, w } = maxHeap.pop();

    const idx = bags.findIndex(
      ({ limit, result }) => result === 0 && limit >= w
    );

    if (idx !== -1) {
      bags[idx].result = v;
    }
  }

  console.log(
    bags
      .filter((v) => v.result !== 0)
      .map((v) => v.result)
      .reduce((acc, cur) => acc + cur, 0)
  );
}
