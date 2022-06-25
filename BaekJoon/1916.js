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
    while (this.findParent(index) && this.findParent(index).cost > this.items[index].cost) {
      this.swap(index, this.findParentIdx(index));
      index = this.findParentIdx(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (
      (this.findLeftChild(index) && this.findLeftChild(index).cost < this.items[index].cost) ||
      (this.findRightChild(index) && this.findRightChild(index).cost < this.items[index].cost)
    ) {
      let smallerIndex = this.findLeftChildIdx(index);
      if (this.findRightChild(index) && this.findRightChild(index).cost < this.items[smallerIndex].cost) {
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

const Dijkstra = (start, adjList, V) => {
  const minHeap = new MinHeap();
  const dist = Array.from({ length: V }, () => Infinity);
  dist[start] = 0;
  minHeap.add({ to: start, cost: 0 });
  while (minHeap.size()) {
    const { to: vertex, cost } = minHeap.poll();
    if (!adjList[vertex]) continue;
    if (dist[vertex] < cost) continue;
    for (const next of adjList[vertex]) {
      const { to: nextVertex, cost: nextCost } = next;
      if (dist[nextVertex] > cost + nextCost) {
        dist[nextVertex] = cost + nextCost;
        minHeap.add({ to: nextVertex, cost: cost + nextCost });
      }
    }
  }
  return dist;
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const NumOfCity = Number(input[0]);
  const NumOfBus = Number(input[1]);
  input = input.slice(2);
  const Bus = Array.from({ length: NumOfCity }, () => []);
  for (let i = 0; i < NumOfBus; i++) {
    const [start, end, cost] = input[i].split(" ").map(Number);
    Bus[start - 1].push({ to: end - 1, cost });
  }
  input = input.slice(NumOfBus);
  const [start, dest] = input[0].split(" ").map(Number);
  const answer = Dijkstra(start - 1, Bus, NumOfCity);
  console.log(answer[dest - 1]);
});
