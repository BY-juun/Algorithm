const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];
let isVisited;
const candidate = [];

function DFS(curX, curY, board, road) {
  if (curX === board.length - 1 && curY === board[0].length - 1) {
    candidate.push(road);
    return;
  }
  for (let i = 0; i < 4; i++) {
    const Dx = curX + dx[i];
    const Dy = curY + dy[i];
    if (Dx >= 0 && Dy >= 0 && Dx < board.length && Dy < board[0].length) {
      if (!isVisited[Dx][Dy] && !board[Dx][Dy]) {
        isVisited[Dx][Dy] = true;
        DFS(Dx, Dy, board, [...road, { x: Dx, y: Dy }]);
        isVisited[Dx][Dy] = false;
      }
    }
  }
}

function solution(board) {
  var answer = 0;
  isVisited = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => false));
  isVisited[0][0] = true;
  DFS(0, 0, board, []);
  console.log(candidate);
  return answer;
}

solution([
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0],
]);
