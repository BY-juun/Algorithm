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
  const [n, m, x] = input[0].split(" ").map(Number);
  const adj = Array.from({ length: n }, () => []);
  const reverse_adj = Array.from({ length: n }, () => []);

  input.slice(1).forEach((line) => {
    const [start, end, cost] = line.split(" ").map(Number);
    adj[start - 1].push({ to: end - 1, cost });
    reverse_adj[end - 1].push({ to: start - 1, cost });
  });

  solve(adj, reverse_adj, x - 1);
});

function dijkstra(adj, start) {
  const dist = Array.from({ length: adj.length }, () => Infinity);
  dist[start] = 0;

  const minHeap = new MinHeap();
  minHeap.add([start, 0]);

  while (minHeap.size()) {
    const [vertex, currentCost] = minHeap.poll();

    if (!adj[vertex]) continue;
    if (dist[vertex] < currentCost) continue;

    adj[vertex].forEach(({ cost: nextCost, to: nextVertex }) => {
      if (dist[nextVertex] > currentCost + nextCost) {
        dist[nextVertex] = currentCost + nextCost;
        minHeap.add([nextVertex, currentCost + nextCost]);
      }
    });
  }

  return dist;
}

function solve(adj, reverse_adj, x) {
  //x에서 n번마을까지
  const dist1 = dijkstra(adj, x);

  //n에서 x번마을까지
  const dist2 = dijkstra(reverse_adj, x);

  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < dist1.length; i++) {
    answer = Math.max(answer, dist1[i] + dist2[i]);
  }
  console.log(answer);
}
