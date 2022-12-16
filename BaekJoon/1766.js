//위상정렬 + 우선순위큐
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

function solve(n, graph, inDegree) {
  const pq = new MinHeap();
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) pq.push(i);
  }

  while (pq.heap.length !== 0) {
    const n = pq.pop();
    result.push(n);
    graph[n].forEach((v) => {
      inDegree[v] -= 1;
      //들어오는 간선이 다 끊겨야 들어갈수있다.
      if (inDegree[v] === 0) pq.push(v);
    });
  }
  console.log(result.join("\n"));
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [length] = input[0].split(" ").map(Number);
  const inDegree = Array.from({ length: length + 1 }, () => 0);
  const graph = Array.from({ length: length + 1 }, () => []);
  input.slice(1).forEach((v) => {
    const [prev, next] = v.split(" ").map(Number);
    graph[prev].push(next);
    inDegree[next]++;
  });
  solve(length, graph, inDegree);
});
