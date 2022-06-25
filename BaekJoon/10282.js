class Heap {
  constructor() {
    this.items = [];
  }

  swap(index1, index2) {
    [this.items[index1], this.items[2]] = [this.items[index2], this.items[index1]];
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
    let idx = this.size() - 1;
    while (this.findParent(idx) && this.findParent(idx).cost > this.items[idx].cost) {
      this.swap(idx, this.findParentIdx(idx));
      idx = this.findParentIdx(idx);
    }
  }
  bubbleDown() {
    let idx = 0;
    while (
      (this.findLeftChild(idx) && this.findLeftChild(idx).cost < this.items[idx].cost) ||
      (this.findRightChildIdx(idx) && this.findRightChildIdx(idx).cost < this.items[idx].cost)
    ) {
      let smallerIdx = this.findLeftChildIdx(idx);
      if (this.findRightChild(idx) && this.findRightChild(idx).cost < this.items[smallerIdx].cost) smallerIdx = this.findRightChildIdx(idx);
      this.swap(idx, smallerIdx);
      idx = smallerIdx;
    }
  }
  add(val) {
    this.items.push(val);
    this.bubbleUp();
  }
  poll() {
    if (this.size() === 1) return this.items.pop();
    const value = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();
    return value;
  }
}

function Dijkstra(start, adjList, V) {
  const minHeap = new MinHeap();
  const dist = Array.from({ length: V }, () => Infinity);
  dist[start] = 0;
  minHeap.add({ to: start, cost: 0 });
  while (minHeap.size()) {
    const { to, cost } = minHeap.poll();
    if (!adjList[to]) continue;
    if (dist[to] < cost) continue;
    for (const next of adjList[to]) {
      const { to: nextTo, cost: nextCost } = next;
      if (dist[nextTo] > cost + nextCost) {
        dist[nextTo] = cost + nextCost;
        minHeap.add({ to: nextTo, cost: cost + nextCost });
      }
    }
  }
  return dist;
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const NumOfCase = Number(input[0]);
  input = input.slice(1);
  for (let cases = 0; cases < NumOfCase; cases++) {
    const [n, d, c] = input[0].split(" ").map(Number);
    input = input.slice(1);
    const lines = Array.from({ length: n }, () => []);
    for (let i = 0; i < d; i++) {
      const [a, b, s] = input[i].split(" ").map(Number);
      lines[b - 1].push({ to: a - 1, cost: s });
    }
    input = input.slice(d);
    const answer = Dijkstra(c - 1, lines, n);
    const hackedNum = answer.filter((v) => v !== Infinity);
    const max = Math.max(...hackedNum);
    console.log(hackedNum.length, max);
  }
});
