class Heap {
  constructor() {
    this.items = [];
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  findParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  findLeftChildIdx(idx) {
    return idx * 2 + 1;
  }

  findRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  findParent(idx) {
    return this.items[this.findParentIdx(idx)];
  }

  findLeftChild(idx) {
    return this.items[this.findLeftChildIdx(idx)];
  }

  findRightChild(idx) {
    return this.items[this.findRightChildIdx(idx)];
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;
    while (this.findParent(index) && this.findParent(index)[1] > this.items[index][1]) {
      this.swap(index, this.findParentIdx(index));
      index = this.findParentIdx(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (
      (this.findLeftChild(index) && this.findLeftChild(index)[1] < this.items[index][1]) ||
      (this.findRightChild(index) && this.findRightChild(index)[1] < this.items[index][1])
    ) {
      let smallerIndex = this.findLeftChildIdx(index);
      if (this.findRightChild(index) && this.findRightChild(index) < this.items[smallerIndex][1]) {
        smallerIndex = this.findRightChildIdx(index);
      }

      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }

  add(value) {
    this.items.push(value);
    this.bubbleUp();
  }
  poll() {
    if (this.items.length === 1) return this.items.pop();
    const value = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();

    return value;
  }
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
  const adj = Array.from({ length: n }, () => []);
  for (let i = 0; i < m; i++) {
    const [start, end, cost] = input[i].split(" ").map(Number);
    adj[start - 1].push({ to: end - 1, cost });
  }
  const [start, end] = input[m].split(" ").map(Number);
  solve(start - 1, end - 1, adj);
});

function solve(start, end, adj) {
  const dist = Array.from({ length: adj.length }, () => Infinity);
  dist[start] = 0;

  const minHeap = new MinHeap();
  minHeap.add([start, 0]);

  while (minHeap.size()) {
    const [vertex, currentCost] = minHeap.poll();

    if (!adj[vertex]) continue;
    if (dist[vertex] < currentCost) continue;

    adj[vertex].forEach(({ to, cost: nextCost }) => {
      if (dist[to] > currentCost + nextCost) {
        dist[to] = currentCost + nextCost;
        minHeap.add([to, currentCost + nextCost]);
      }
    });
  }

  console.log(dist[end]);
}
