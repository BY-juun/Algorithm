let answer = 0;
let cart = [];
function cartCheck(item) {
  if (cart.length === 0) {
    cart.push(item);
    return;
  }
  const popItem = cart.pop();
  if (popItem === item) {
    answer += 2;
  } else {
    cart.push(popItem);
    cart.push(item);
  }
}

function solution(board, moves) {
  let boardLength = board.length;
  for (let move of moves) {
    for (let i = 0; i < boardLength; i++) {
      if (board[i][move - 1] !== 0) {
        cartCheck(board[i][move - 1]);
        board[i][move - 1] = 0;
        break;
      }
    }
  }
  return answer;
}
