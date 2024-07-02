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
  const [n, m] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((row) => {
    return row.split("").map(Number);
  });

  solution2(board);
});

const EMPTY = 0;
const WALL = 1;

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];

function solution(board) {
  const numOfRow = board.length;
  const numOfCol = board[0].length;

  const queue = [[0, 0]];
  const dist = Array.from({ length: numOfRow }, () =>
    Array.from({ length: numOfCol }, () => Infinity)
  );
  dist[0][0] = 0;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
      const nextX = x + dx[dir];
      const nextY = y + dy[dir];

      if (nextX < 0 || nextX >= numOfRow || nextY < 0 || nextY >= numOfCol)
        continue;

      if (board[nextX][nextY] === EMPTY) {
        if (dist[nextX][nextY] > dist[x][y]) {
          dist[nextX][nextY] = dist[x][y];
          queue.push([nextX, nextY]);
        }
      } else {
        if (dist[nextX][nextY] > dist[x][y] + 1) {
          dist[nextX][nextY] = dist[x][y] + 1;
          queue.push([nextX, nextY]);
        }
      }
    }
  }

  console.log(dist[numOfRow - 1][numOfCol - 1]);
}

function solution2(board) {
  const numOfRow = board.length;
  const numOfCol = board[0].length;

  const dist = Array.from({ length: numOfRow }, () =>
    Array.from({ length: numOfCol }, () => Infinity)
  );
  dist[0][0] = 0;

  const pq = new PriorityQueue();

  pq.heappush(0, 0, 0);

  while (pq.size()) {
    const { x, y, v } = pq.heappop();

    for (let dir = 0; dir < 4; dir++) {
      const nextX = x + dx[dir];
      const nextY = y + dy[dir];

      if (nextX < 0 || nextX >= numOfRow || nextY < 0 || nextY >= numOfCol)
        continue;

      if (board[nextX][nextY] === EMPTY) {
        if (dist[nextX][nextY] > v) {
          dist[nextX][nextY] = v;
          pq.heappush(v, nextX, nextY);
        }
      } else {
        if (dist[nextX][nextY] > v + 1) {
          dist[nextX][nextY] = v + 1;
          pq.heappush(v + 1, nextX, nextY);
        }
      }
    }
  }

  console.log(dist[numOfRow - 1][numOfCol - 1]);
}
