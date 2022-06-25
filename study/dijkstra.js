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

const Dijkstra = (start, adjList, V) => {
  const minHeap = new MinHeap();
  const dist = Array.from({ length: V + 1 }, () => Infinity);
  dist[start] = 0;
  minHeap.add([start, 0]);
  while (minHeap.size()) {
    const [vertex, cost] = minHeap.poll();
    if (!adjList[vertex]) continue;
    if (dist[vertex] < cost) continue;

    for (let i = 0; i < adjList[vertex].length; i++) {
      const [nextVertex, nextCost] = adjList[vertex][i];
      if (dist[nextVertex] > cost + nextCost) {
        dist[nextVertex] = cost + nextCost;
        minHeap.add([nextVertex, cost + nextCost]);
      }
    }
  }
  return dist;
};
