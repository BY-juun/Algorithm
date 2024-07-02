// 가중치, (x, y) 좌표를 저장할 node
class Node {
  constructor(v, x, y) {
    this.v = v;
    this.x = x;
    this.y = y;
  }
}

// 우선순위 큐
class PriorityQueue {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(v, x, y) {
    let data = new Node(v, x, y);
    this.heap.push(data);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx].v > this.heap[curIdx].v) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx].v < this.heap[curIdx].v) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx].v < this.heap[curIdx].v ||
      this.heap[rightIdx].v < this.heap[curIdx].v
    ) {
      const minIdx =
        this.heap[leftIdx].v > this.heap[rightIdx].v ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
      if (leftIdx >= this.heap.length || rightIdx >= this.heap.length) break;
    }

    return min;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let idx = 1;
  while (true) {
    const numOfLine = Number(input[0]);
    if (!numOfLine) break;

    const board = [];
    for (let j = 1; j <= numOfLine; j++) {
      board.push(input[j].split(" ").map(Number));
    }

    solution(board, idx);

    idx++;
    input = input.slice(numOfLine + 1, input.length);
  }
});

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];

function solution(board, idx) {
  const numOfRow = board.length;
  const numOfCol = board[0].length;

  const dist = Array.from({ length: numOfRow }, () =>
    Array.from({ length: numOfCol }, () => Number.MAX_SAFE_INTEGER)
  );
  dist[0][0] = board[0][0];

  const pq = new PriorityQueue();
  pq.heappush(board[0][0], 0, 0);

  while (pq.size()) {
    console.log(pq.heap);
    const { v, x, y } = pq.heappop();

    if (x === numOfRow && y === numOfCol) break;

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx < 0 || nx >= numOfRow || ny < 0 || ny >= numOfCol) continue;

      const nv = v + board[nx][ny];

      if (nv < dist[nx][ny]) {
        dist[nx][ny] = nv;
        pq.heappush(nv, nx, ny);
      }
    }
  }

  console.log(`Problem ${idx}: ${dist[numOfRow - 1][numOfCol - 1]}`);
}
