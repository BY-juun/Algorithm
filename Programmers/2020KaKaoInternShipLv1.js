function getPosition(num) {
  if (num === "1") return [3, 0];
  else if (num === "2") return [3, 1];
  else if (num === "3") return [3, 2];
  else if (num === "4") return [2, 0];
  else if (num === "5") return [2, 1];
  else if (num === "6") return [2, 2];
  else if (num === "7") return [1, 0];
  else if (num === "8") return [1, 1];
  else if (num === "9") return [1, 2];
  else if (num === "*") return [0, 0];
  else if (num === "0") return [0, 1];
  else if (num === "#") return [0, 2];
}

const leftHand = { x: 0, y: 0 };
const rightHand = { x: 0, y: 2 };
var answer = "";

function pickLeft(xPos, yPos) {
  answer += "L";
  leftHand.x = xPos;
  leftHand.y = yPos;
}

function pickRight(xPos, yPos) {
  answer += "R";
  rightHand.x = xPos;
  rightHand.y = yPos;
}

function getDist(hand, xPos, yPos) {
  if (hand === "L") {
    return Math.abs(leftHand.x - xPos) + Math.abs(leftHand.y - yPos);
  } else {
    return Math.abs(rightHand.x - xPos) + Math.abs(rightHand.y - yPos);
  }
}

function solution(numbers, hand) {
  const arr = [
    ["*", "0", "#"],
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
  ];

  for (let x of numbers) {
    x = String(x);
    let [xPos, yPos] = getPosition(x);
    if (x === "1" || x === "4" || x === "7") pickLeft(xPos, yPos);
    else if (x === "3" || x === "6" || x === "9") pickRight(xPos, yPos);
    else {
      const leftHandDist = getDist("L", xPos, yPos);
      const rightHandDist = getDist("R", xPos, yPos);
      if (leftHandDist === rightHandDist) {
        if (hand === "right") pickRight(xPos, yPos);
        else pickLeft(xPos, yPos);
      } else if (leftHandDist < rightHandDist) pickLeft(xPos, yPos);
      else pickRight(xPos, yPos);
    }
  }
  return answer;
}
