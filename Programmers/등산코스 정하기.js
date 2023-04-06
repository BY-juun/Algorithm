class MinHeap {
  heap;
  constructor() {
    this.heap = [];
  }
  push(value) {
    this.heap.push(value);
    let idx = this.heap.legnth - 1;
    let parentIdx = this.getParentIdx(idx);

    while (idx > 0 && this.heap[idx][0] < this.heap[parentIdx][0]) {
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

      if (leftChildIdx < this.heap.length && this.heap[idx][0] > this.heap[leftChildIdx][0]) {
        idx = leftChildIdx;
      }

      if (rightChildIdx < this.heap.length && this.heap[idx][0] > this.heap[rightChildIdx][0]) {
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
}

function solution(n, paths, gates, summits) {
  const graph = Array.from({ length: n + 1 }, () => []);

  const min_dist = Array.from({ length: n + 1 }, () => 10000001);

  paths.forEach((element) => {
    const [f, t, w] = element;
    graph[f].push([w, t]);
    graph[t].push([w, f]);
  });

  const pq = new MinHeap();

  gates.forEach((gate) => {
    pq.push([0, gate]);
  });

  while (pq.heap.length !== 0) {
    const [cur_weight, cur_node] = pq.pop();

    if (min_dist[cur_node] <= cur_weight) continue;

    min_dist[cur_node] = cur_weight;

    if (summits.includes(cur_node)) continue;

    for (const nxt of graph[cur_node]) {
      let [nxt_weight, nxt_node] = nxt;

      nxt_weight = Math.max(nxt_weight, cur_weight);

      if (min_dist[nxt_node] <= nxt_weight) continue;

      pq.push([nxt_weight, nxt_node]);
    }
  }
  let answer = [0, 10000001];
  for (const summit of summits) {
    const w = min_dist[summit];

    if (w < answer[1]) answer = [summit, w];
    else if (w === answer[1] && summit < answer[0]) answer = [summit, w];
  }
  console.log(answer);
  return answer;
}

solution(
  6,
  [
    [1, 2, 3],
    [2, 3, 5],
    [2, 4, 2],
    [2, 5, 4],
    [3, 4, 4],
    [4, 5, 3],
    [4, 6, 1],
    [5, 6, 1],
  ],
  [1, 3],
  [5]
);
