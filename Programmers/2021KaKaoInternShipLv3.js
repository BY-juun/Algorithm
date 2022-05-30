class Node {
  constructor(idx, prev) {
    this.idx = idx;
    this.prev = prev;
    this.next;
  }
}

function solution(n, k, cmd) {
  var answer = Array.from({ length: n }, () => "X");
  let curNode;
  const delStack = [];
  const root = new Node(-1);
  let prevNode = root;
  for (let i = 0; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;
    if (i === k) curNode = newNode;
  }

  for (const x of cmd) {
    const [command, num] = x.split(" ");
    let i = 0;
    switch (command) {
      case "U":
        while (i < num && curNode.prev.idx !== -1) {
          curNode = curNode.prev;
          i++;
        }
        break;
      case "D":
        while (i < num && curNode.next) {
          curNode = curNode.next;
          i++;
        }
        break;
      case "C":
        delStack.push(curNode);
        const prevNode = curNode.prev;
        const nextNode = curNode.next;
        if (!nextNode) {
          prevNode.next = undefined;
          curNode = prevNode;
        } else {
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
          curNode = nextNode;
        }
        break;
      case "Z":
        const delNode = delStack.pop();
        const prev = delNode.prev;
        const next = delNode.next;
        if (prev) prev.next = delNode;
        if (next) next.prev = delNode;

        break;
    }
  }
  curNode = root.next;
  while (curNode) {
    answer[curNode.idx] = "O";
    curNode = curNode.next;
  }
  return answer.join("");
}
