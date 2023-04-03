function solution(board, aloc, bloc) {
  const xMax = board.length;
  const yMax = board[0].length;

  const dx = [-1, 0, 0, 1];
  const dy = [0, -1, 1, 0];
  const A_TURN = true;
  const B_TURN = false;

  return DFS(aloc, bloc, A_TURN, 0).count;

  function DFS(aloc, bloc, turn, count) {
    if (turn === A_TURN && !isFootHoldExist(aloc[0], aloc[1])) return { win: false, count };
    if (turn === B_TURN && !isFootHoldExist(bloc[0], bloc[1])) return { win: false, count };

    let win = Infinity;
    let lose = 0;

    const [currentTurnUserX, currentTurnUserY] = turn === A_TURN ? aloc : bloc;
    board[currentTurnUserX][currentTurnUserY] = 0;

    for (let dir = 0; dir < 4; dir++) {
      const nextX = currentTurnUserX + dx[dir];
      const nextY = currentTurnUserY + dy[dir];

      if (isOutsideOfBoard(nextX, nextY)) continue;
      if (!isFootHoldExist(nextX, nextY)) continue;

      let result;
      if (turn === A_TURN) result = DFS([nextX, nextY], bloc, !turn, count + 1);
      else result = DFS(aloc, [nextX, nextY], !turn, count + 1);

      if (!result.win) win = Math.min(win, result.count);
      else lose = Math.max(lose, result.count);
    }

    board[currentTurnUserX][currentTurnUserY] = 1;

    //4방향이 다 이동할 수 없는 경우
    if (win === Infinity && lose === 0) return { win: false, count };
    else if (win !== Infinity) return { win: true, count: win };
    else return { win: false, count: lose };
  }

  function isOutsideOfBoard(nextX, nextY) {
    return nextX < 0 || nextX >= xMax || nextY < 0 || nextY >= yMax ? true : false;
  }

  function isFootHoldExist(x, y) {
    return board[x][y] ? true : false;
  }
}

const answer = solution([[1, 1, 1, 1, 1]], [0, 0], [0, 4]);

console.log(answer);
