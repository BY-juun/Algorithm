class MinHeap {
  constructor() {
    this.nodes = [];
  }

  swap(indexA, indexB) {
    [this.nodes[indexA], this.nodes[indexB]] = [this.nodes[indexB], this.nodes[indexA]];
  }

  insert(value) {
    this.nodes.push(value);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index === 0) return;
    const currentNode = this.nodes[index];
    const parentIdx = Math.floor((index - 1) / 2);
    const parentNode = this.nodes[parentIdx];
    if (parentNode <= currentNode) return;
    this.swap(index, parentIdx);
    index = parentIdx;
    this.bubbleUp(index);
  }

  extract() {
    const min = this.nodes[0];
    if (this.nodes.length === 1) {
      return this.nodes.pop();
    }
    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const length = this.nodes.length;
    let minimum = index;
    if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;

    //왼쪽만 있는 경우
    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex] < this.nodes[minimum]) {
        this.swap(leftChildIndex, minimum);
      }
      return;
    }

    if (this.nodes[leftChildIndex] > this.nodes[rightChildIndex]) {
      if (rightChildIndex <= length && this.nodes[rightChildIndex] < this.nodes[minimum]) {
        minimum = rightChildIndex;
      }
    } else {
      if (leftChildIndex <= length && this.nodes[leftChildIndex] < this.nodes[minimum]) {
        minimum = leftChildIndex;
      }
    }

    if (minimum !== index) {
      this.swap(index, minimum);
      this.trickleDown(minimum);
    }
  }
}

function test() {
  const MyHeap = new MinHeap();
  MyHeap.insert(3);
  MyHeap.insert(2);
  MyHeap.insert(5);
  MyHeap.insert(6);
  MyHeap.insert(12);
  MyHeap.insert(4);
  MyHeap.insert(123);
  MyHeap.insert(1);
  console.log(MyHeap.nodes);
  MyHeap.extract();
  console.log(MyHeap.nodes);

  MyHeap.extract();

  console.log(MyHeap.nodes);
  MyHeap.extract();
  console.log(MyHeap.nodes);
}
test();
