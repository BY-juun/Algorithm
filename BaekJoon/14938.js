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

const splitNum = (line) => line.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m, r] = splitNum(input[0]);
  const items = splitNum(input[1]);
  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 2; i < input.length; i++) {
    const [f, t, d] = splitNum(input[i]);
    graph[f].push([t, d]);
    graph[t].push([f, d]);
  }

  solution(n, graph, items, m);
});

function solution(n, graph, items, m) {
  let answer = Number.MIN_SAFE_INTEGER;
  items.unshift(0);
  for (let i = 1; i <= n; i++) {
    let result = 0;
    const min_dist = Array.from({ length: n + 1 }, () => 16);
    const pq = new MinHeap();
    pq.push([i, 0]);

    while (!pq.isEmpty()) {
      const [cur_node, cur_dist] = pq.pop();

      if (min_dist[cur_node] <= cur_dist) continue;

      min_dist[cur_node] = cur_dist;

      for (let [nxt_node, nxt_dist] of graph[cur_node]) {
        nxt_dist += cur_dist;

        if (min_dist[nxt_node] <= nxt_dist) continue;

        pq.push([nxt_node, nxt_dist]);
      }
    }

    for (let j = 1; j <= n; j++) {
      if (min_dist[j] <= m) result += items[j];
    }

    answer = Math.max(answer, result);
  }

  console.log(answer);
}
