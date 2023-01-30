const dx = [1, 0, 0, -1];
const dy = [0, -1, 1, 0];
const dl = ["d", "l", "r", "u"];
let graph;
let answer = null;
const getDist = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

function solution(n, m, x, y, r, c, k) {
  graph = Array.from({ length: n }, () => Array.from({ length: m }, () => null));
  graph[x - 1][y - 1] = "START";
  graph[r - 1][c - 1] = "END";

  DFS(x - 1, y - 1, "", n, m, r, c, k);

  return answer ? answer : "impossible";
}

function DFS(x, y, letters, n, m, r, c, k) {
  if (letters.length === k) {
    if (graph[x][y] === "END") answer = answer < letters ? answer : letters;
    return;
  }
  for (let dir = 0; dir < 4; dir++) {
    const nextX = x + dx[dir];
    const nextY = y + dy[dir];
    const dirLetter = dl[dir];

    if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;
    const nextLetter = letters + dirLetter;
    const dist = getDist(nextX, nextY, r - 1, c - 1);
    const remainDist = k - nextLetter.length;
    if (remainDist < dist || remainDist % 2 !== dist % 2) continue;
    if (nextLetter <= answer || !answer) DFS(nextX, nextY, nextLetter, n, m, r, c, k);
  }
}
console.log(solution(3, 4, 2, 3, 3, 1, 5));
