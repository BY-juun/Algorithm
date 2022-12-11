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

function solution(start, board, arr) {
  const minHeap = new MinHeap();
  minHeap.push({ to: start, cost: 0 });
  while (!minHeap.isEmpty()) {
    const { to, cost } = minHeap.pop();
    if (board[to].length === 0) continue;
    if (arr[to] < cost) continue;
    board[to].forEach((next) => {
      if (arr[next.to] > next.cost + arr[to]) {
        arr[next.to] = next.cost + arr[to];
        minHeap.push({
          to: next.to,
          cost: arr[next.to],
        });
      }
    });
  }
  console.log(arr.join("\n"));
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const start = Number(input[1]);
  const arr = Array.from({ length: n }, () => Infinity);
  arr[start - 1] = 0;
  const board = Array.from({ length: n }, () => []);
  input.slice(2).forEach((i) => {
    const [u, v, w] = i.split(" ").map(Number);
    board[u - 1].push({ to: v - 1, cost: w });
  });
  solution(start - 1, board, arr);
});
