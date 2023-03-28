const dx = [1, 0, 0, -1];
const dy = [0, -1, 1, 0];
const START = "START";
const END = "END";
const dl = ["d", "l", "r", "u"];

function solution(n, m, x, y, r, c, k) {
  let graph;
  let answer = null;

  const InitGraph = () => {
    const graph = Array.from({ length: n }, () => Array.from({ length: m }, () => null));
    graph[x - 1][y - 1] = START;
    graph[r - 1][c - 1] = END;
    return graph;
  };

  const isInGraph = (curX, curY) => {
    if (curX < 0 || curY < 0 || curX >= n || curY >= m) return false;
    return true;
  };

  const getRemainDist = (curX, curY) => Math.abs(curX - (r - 1)) + Math.abs(curY - (c - 1));

  const DFS = (curX, curY, accStr) => {
    if (accStr.length === k) {
      if (graph[curX][curY] === END) answer = answer < accStr ? answer : accStr;
      return;
    }

    for (let dir = 0; dir < 4; dir++) {
      const nextX = curX + dx[dir];
      const nextY = curY + dy[dir];
      const dirLetter = dl[dir];

      if (!isInGraph(nextX, nextY)) continue;
      const nextLetter = accStr + dirLetter;
      const remainDist = getRemainDist(nextX, nextY);
      const remainLimitDist = k - nextLetter.length;

      if (remainLimitDist < remainDist) continue;
      if (remainLimitDist % 2 !== remainDist % 2) continue;
      if (answer) break;

      DFS(nextX, nextY, nextLetter);
    }
  };

  graph = InitGraph();
  DFS(x - 1, y - 1, "");

  return answer ? answer : "impossible";
}

console.log(solution(3, 4, 2, 3, 3, 1, 5));
