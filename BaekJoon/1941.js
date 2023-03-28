function solution(board) {
  let answer = 0;
  const boardPos = [];

  const dx = [-1, 0, 0, 1];
  const dy = [0, -1, 1, 0];

  const length = 5;
  makeBoardPos();
  findCandidate();

  console.log(answer);

  function makeBoardPos() {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        boardPos.push([i, j]);
      }
    }
  }

  function findCandidate() {
    findCandidateDFS(0, [], "");
  }

  function findCandidateDFS(curIdx, accArr, accStr) {
    if (accStr.length === 7) {
      if (isSMoreThan4(accStr)) {
        if (checkIsOneLine(accArr)) answer++;
      }
      return;
    }
    if (curIdx === boardPos.length) return;
    const [x, y] = boardPos[curIdx];
    findCandidateDFS(curIdx + 1, [...accArr, [x, y]], accStr + board[x][y]);
    findCandidateDFS(curIdx + 1, [...accArr], accStr);
  }

  function isSMoreThan4(str) {
    if (str.split("").filter((chr) => chr === "S").length >= 4) return true;
    return false;
  }

  function checkIsOneLine(posArr) {
    const tempBoard = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => 0));

    posArr.forEach(([x, y]) => {
      tempBoard[x][y] = 1;
    });

    return goLineBFS(tempBoard, posArr[0][0], posArr[0][1], 1);
  }

  function goLineBFS(board, i, j) {
    let count = 0;

    const isVisited = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => false));

    isVisited[i][j] = true;
    const queue = [[i, j]];
    while (queue.length !== 0) {
      const [x, y] = queue.shift();
      for (let dir = 0; dir < 4; dir++) {
        const nextX = x + dx[dir];
        const nextY = y + dy[dir];
        if (!isInGraph(nextX, nextY)) continue;
        if (!board[nextX][nextY]) continue;
        if (isVisited[nextX][nextY]) continue;

        isVisited[nextX][nextY] = true;

        count++;
        queue.push([nextX, nextY]);
      }
    }

    return count === 6 ? true : false;
  }

  function isInGraph(x, y) {
    if (x < 0 || y < 0 || x >= length || y >= length) return false;
    return true;
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const board = [];
  input.forEach((line) => {
    board.push(line.split(""));
  });
  solution(board);
});
