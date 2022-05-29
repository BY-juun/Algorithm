const arr = [];

function Recursive(numbers, curIdx, AccArr) {
  if (AccArr.length === 2) {
    arr.push(AccArr[0] + AccArr[1]);
    return;
  }
  if (curIdx === numbers.length) return;
  Recursive(numbers, curIdx + 1, [...AccArr, numbers[curIdx]]);
  Recursive(numbers, curIdx + 1, [...AccArr]);
}

function solution(numbers) {
  var answer = [];
  Recursive(numbers, 0, []);
  answer = [...new Set(arr)].sort((a, b) => a - b);
  return answer;
}
