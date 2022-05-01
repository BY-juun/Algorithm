function solution(n, edge) {
  var answer = 0;
  let isVisited = Array.from({ length: n }, () => false);
  let dist = Array.from({ length: n }, () => 0);
  let queue = [];
  isVisited[0] = true;
  queue.push({ idx: 1, dist: 0 });

  while (queue.length !== 0) {
    let curNode = queue.shift();
    let { idx: curIdx, dist: curDist } = curNode;
    for (let x of edge) {
      let [vertexA, vertexB] = x;
      if (vertexA === curIdx && !isVisited[vertexB - 1]) {
        isVisited[vertexB - 1] = true;
        dist[vertexB - 1] = curDist + 1;
        queue.push({ idx: vertexB, dist: curDist + 1 });
      } else if (vertexB === curIdx && !isVisited[vertexA - 1]) {
        isVisited[vertexA - 1] = true;
        dist[vertexA - 1] = curDist + 1;
        queue.push({ idx: vertexA, dist: curDist + 1 });
      }
    }
  }

  const maxDist = Math.max(...dist);

  for (let i = 0; i < dist.length; i++) {
    if (dist[i] === maxDist) answer++;
  }

  return answer;
}
