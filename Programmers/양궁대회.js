let prevScore = Number.MIN_SAFE_INTEGER;
let answer = [];
let Apeach;
let ArrowLimit;

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

function getScore(Ryan, Apeach) {
  let RyanScore = 0;
  let ApeachScore = 0;
  for (let i = 0; i <= 10; i++) {
    const score = 10 - i;
    if (Ryan[i] === 0 && Apeach[i] === 0) continue;
    if (Ryan[i] > Apeach[i]) RyanScore += score;
    else ApeachScore += score;
  }
  return ApeachScore > RyanScore ? 0 : RyanScore - ApeachScore;
}

function DFS(curIdx, arr) {
  if (curIdx === 11) {
    const score = getScore(arr, Apeach);
    if (score !== 0) {
      if (score > prevScore) {
        prevScore = score;
        answer = [...arr];
      } else if (score === prevScore) {
        for (let i = 10; i >= 0; i--) {
          if (answer[i] < arr[i]) return (answer = [...arr]);
          else if (answer[i] > arr[i]) return;
        }
      }
    }
    return;
  }
  const accArrow = sum(arr);
  if (curIdx === 10 && accArrow <= ArrowLimit) return DFS(curIdx + 1, [...arr, ArrowLimit - accArrow]);
  if (accArrow + Apeach[curIdx] + 1 <= ArrowLimit) DFS(curIdx + 1, [...arr, Apeach[curIdx] + 1]);
  DFS(curIdx + 1, [...arr, 0]);
}
function solution(n, info) {
  Apeach = info;
  ArrowLimit = n;
  for (let i = 0; i <= 10; i++) {
    const arr = Array.from({ length: i }, () => 0);
    DFS(i, arr);
  }
  return answer.length === 0 ? [-1] : answer;
}
