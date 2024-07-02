//위상정렬 + 우선순위큐
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

function solve(n, graph, inDegree) {
  const answer = [];
  const minHeap = new MinHeap();

  inDegree.forEach((v, idx) => {
    if (v === 0) minHeap.push(idx);
  });

  while (minHeap.size()) {
    const { v } = minHeap.pop();

    graph[v].forEach((next) => {
      inDegree[next]--;

      if (inDegree[next] === 0) {
        minHeap.push(next);
      }
    });

    answer.push(v);
  }

  console.log(answer.map((v) => v + 1).join(" "));
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
  const [length] = input[0].split(" ").map(Number);
  const inDegree = Array.from({ length: length }, () => 0);
  const graph = Array.from({ length: length }, () => []);
  input.slice(1).forEach((v) => {
    const [prev, next] = v.split(" ").map(Number);
    graph[prev - 1].push(next - 1);
    inDegree[next - 1]++;
  });
  solve(length, graph, inDegree);
});
