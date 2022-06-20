function CopyBoard(board) {
  const newBoard = [];
  board.forEach((b) => {
    newBoard.push([...b]);
  });
  return newBoard;
}

function IsBubbled(board, row, col) {
  const target = board[row][col];
  for (let i = row; i < row + 2; i++) {
    for (let j = col; j < col + 2; j++) {
      if (board[i][j] !== target) return false;
    }
  }
  return true;
}

function bubbleBlock(board) {
  const newBoard = CopyBoard(board);
  let bubbleCount = 0;
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (board[i][j] !== 0) {
        if (IsBubbled(board, i, j)) {
          bubbleCount++;
          newBoard[i][j] = 0;
          newBoard[i][j + 1] = 0;
          newBoard[i + 1][j] = 0;
          newBoard[i + 1][j + 1] = 0;
        }
      }
    }
  }
  return [bubbleCount, newBoard];
}

function dropBlock(board) {
  for (let i = 0; i < board[0].length; i++) {
    let temp = [];
    for (let j = 0; j < board.length; j++) {
      temp.push(board[j][i]);
    }
    temp = temp.filter((v) => v !== 0);
    for (let j = board.length - 1; j >= 0; j--) {
      if (temp.length > 0) board[j][i] = temp.pop();
      else board[j][i] = 0;
    }
  }
}

function findAnswer(board) {
  let result = 0;
  board.forEach((b) => {
    b.forEach((v) => {
      if (v === 0) result++;
    });
  });
  return result;
}

function solution(m, n, board) {
  let newBoard = [];
  board.forEach((v) => {
    newBoard.push(v.split(""));
  });
  while (true) {
    let [bubbleCount, tempBoard] = bubbleBlock(newBoard);
    newBoard = tempBoard;
    if (bubbleCount === 0) return findAnswer(newBoard);
    dropBlock(newBoard);
  }
}

console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]));
