class MinHeap {
  heap;
  constructor() {
    this.heap = [];
  }
  push(value) {
    this.heap.push(value);
    let idx = this.heap.legnth - 1;
    let parentIdx = this.getParentIdx(idx);

    while (idx > 0 && this.heap[idx][1] < this.heap[parentIdx][1]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const result = this.heap[0];

    this.heap[0] = this.heap.pop();

    let originIdx = 0;
    let idx = 0;

    while (true) {
      let leftChildIdx = this.getLeftChildIdx(idx);
      let rightChildIdx = this.getRightChildIdx(idx);

      if (leftChildIdx < this.heap.length && this.heap[idx][1] > this.heap[leftChildIdx][1]) {
        idx = leftChildIdx;
      }

      if (rightChildIdx < this.heap.length && this.heap[idx][1] > this.heap[rightChildIdx][1]) {
        idx = rightChildIdx;
      }

      if (originIdx === idx) break;

      this.swap(originIdx, idx);

      originIdx = idx;
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

  isEmpty() {
    return this.heap.length === 0 ? true : false;
  }
}

function solution([start, end]) {
  if (start >= end) return console.log(start - end);

  const min_time = Array.from({ length: 200000 }, () => Number.MAX_SAFE_INTEGER);

  const pq = new MinHeap();

  pq.push([start, 0]);

  while (!pq.isEmpty()) {
    const [cur_node, cur_time] = pq.pop();

    if (min_time[cur_node] <= cur_time) continue;

    min_time[cur_node] = cur_time;

    for (let [next_node, next_time] of [
      [cur_node + 1, 1],
      [cur_node - 1, 1],
      [cur_node * 2, 0],
    ]) {
      if (next_node >= min_time.length) continue;
      if (next_node <= 0) continue;

      next_time += cur_time;

      if (min_time[next_node] <= next_time) continue;

      pq.push([next_node, next_time]);
    }
  }

  console.log(min_time[end]);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input[0].split(" ").map((value) => Number(value)));
});
