const route = [
  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  [0, 2, 4, 6, 8, 10, 13, 16, 19, 25, 30, 35, 40],
  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 25, 30, 35, 40],
  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 28, 27, 26, 25, 30, 35, 40],
];

function solution(dice) {
  let answer = Number.MIN_SAFE_INTEGER;
  const allCase = [];
  findAllCase();

  function findAllCase() {
    recursive([]);
    function recursive(accArr) {
      if (accArr.length === 10) return allCase.push(accArr);
      for (let i = 0; i < 4; i++) {
        recursive([...accArr, i]);
      }
    }
  }

  function playGame() {
    const piecePos = [0, 0, 0, 0];
    const pieceRoute = [0, 0, 0, 0];
    let score = 0;
    for (let i = 0; i < allCase.length; i++) {
      const currentPiece = allCase[i];
      const currentDice = dice[i];

      if (isPieceEnd(piecePos[currentPiece], currentRoute[currentPiece])) continue;

      const { nextRoute, nextPos } = findNextPosAndRoute(piecePos[currentPiece], pieceRoute[currentPiece], currentDice);

      if (isOtherPieceExist(piecePos, pieceRoute, nextPos, nextRoute)) return;

      if (!isPieceEnd(nextPos, nextRoute)) score += route[nextRoute][nextPos];

      piecePos[currentPiece] = nextPos;
      pieceRoute[currentPiece] = nextRoute;
    }
    answer = Math.max(answer, score);
  }

  function findNextPosAndRoute(currentPos, currentRoute, dice) {
    if (currentRoute !== 0) return { nextRoute: currentRoute, nextPos: currentPos + dice };

    const nextPos = currentPos + dice;
    const route1 = route[0];

    switch (route1[nextPos]) {
      case 10:
        return { nextRoute: 1, nextPos };
      case 20:
        return { nextRoute: 2, nextPos };
      case 30:
        return { nextRoute: 3, nextPos };
    }
  }

  function isOtherPieceExist(piecePos, pieceRoute, nextPos, nextRoute) {
    if (piecePos.find((v) => v === nextPos) && pieceRoute.find((v) => v === nextRoute)) return true;
    return false;
  }

  function isPieceEnd(currentPos, currentRoute) {
    if (currentPos >= route[currentRoute].length) return true;
    return false;
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const dice = input[0].split(" ").map(Number);
  solution(dice);
});
