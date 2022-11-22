let isVisited;

function DFS(node, wires) {
  for (const wire of wires) {
    const [startNode, endNode] = wire;
    if (startNode === node && !isVisited[endNode - 1]) {
      isVisited[endNode - 1] = true;
      DFS(endNode, wires);
    }
    if (endNode === node && !isVisited[startNode - 1]) {
      isVisited[startNode - 1] = true;
      DFS(startNode, wires);
    }
  }
}

function solution(n, wires) {
  var answer = Number.MAX_SAFE_INTEGER;
  for (const wire of wires) {
    const newWires = [...wires].filter((v) => JSON.stringify(wire) !== JSON.stringify(v));
    isVisited = Array.from({ length: n }, () => false);
    const startNode = newWires[0][0];
    isVisited[startNode - 1] = true;
    DFS(startNode, newWires);
    const leftSide = isVisited.filter((v) => v === true).length;
    const rightSide = n - leftSide;
    const gap = Math.abs(leftSide - rightSide);

    if (answer > gap) answer = gap;
  }
  return answer;
}
