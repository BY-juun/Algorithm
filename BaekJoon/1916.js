class MinHeap {
  heap;
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    let curIdx = this.heap.length - 1;
    let parentIdx = Math.floor((curIdx - 1) / 2);
    while (curIdx > 0 && this.heap[parentIdx].cost < this.heap[curIdx].cost) {
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
      if (heap[leftParentIdx] && heap[leftParentIdx].cost < heap[idx].cost) idx = leftParentIdx;
      if (heap[rightParentIdx] && heap[rightParentIdx].cost < heap[idx].cost) idx = rightParentIdx;

      if (idx === originIdx) break;
      this.swap(originIdx, idx);
    }
    return result;
  }

  swap(idx1, idx2) {
    const temp = { ...this.heap[idx1] };
    this.heap[idx1] = { ...this.heap[idx2] };
    this.heap[idx2] = { ...temp };
  }

  isEmpty() {
    return this.heap.length === 0 ? true : false;
  }

  getLeftParentIdx(idx) {
    return idx * 2 + 1;
  }
  getRightParentIdx(idx) {
    return idx * 2 + 2;
  }
}

function solve(start, end, arr, adj) {
  const minHeap = new MinHeap();
  minHeap.push({ to: start, cost: 0 });
  while (!minHeap.isEmpty()) {
    const { to, cost } = minHeap.pop();
    if (adj[to].length === 0) continue;
    if (arr[to] < cost) continue;
    adj[to].forEach((next) => {
      if (arr[next.to] > cost + next.cost) {
        arr[next.to] = cost + next.cost;
        minHeap.push({ to: next.to, cost: arr[next.to] });
      }
    });
  }
  console.log(arr[end - 1]);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  const m = Number(input[1]);
  input = input.slice(2);
  const arr = Array.from({ length: n }, () => Infinity);
  const adj = Array.from({ length: n }, () => []);
  for (let i = 0; i < m; i++) {
    const [start, end, cost] = input[i].split(" ").map(Number);
    adj[start - 1].push({ to: end - 1, cost });
  }
  const [start, end] = input[m].split(" ").map(Number);
  solve(start - 1, end, arr, adj);
});
