let maxScoreGap = Number.MIN_SAFE_INTEGER;
let answer = [];
const MAX_SCORE = 10;
const SAME_SCORE = 0;

function isLastIdx(idx, length) {
  return idx === length - 1 ? true : false;
}

function isScoreExist(lion, appeach) {
  return lion === 0 && appeach === 0 ? false : true;
}

function isEnd(idx, length) {
  return idx === length ? true : false;
}

function compareSameScore(scores) {
  for (let i = scores.length - 1; i >= 0; i--) {
    if (scores[i] > answer[i]) return true;
    else if (scores[i] < answer[i]) return false;
  }
  return false;
}

function compareScore(ryan, appeach) {
  let lionScore = 0;
  let appeachScore = 0;
  for (let i = 0; i < ryan.length; i++) {
    const score = MAX_SCORE - i;
    if (!isScoreExist(ryan[i], appeach[i])) continue;
    if (ryan[i] > appeach[i]) lionScore += score;
    else appeachScore += score;
  }
  return lionScore > appeachScore ? { isRyanWin: true, scoreGap: lionScore - appeachScore } : { isRyanWin: false, scoreGap: 0 };
}

function DFS(idx, remainedArrows, ryan, appeach) {
  if (isEnd(idx, appeach.length)) {
    const { isRyanWin, scoreGap } = compareScore(ryan, appeach);
    if (!isRyanWin) return;

    if (maxScoreGap > scoreGap) return;
    if (maxScoreGap < scoreGap) {
      maxScoreGap = scoreGap;
      return (answer = [...ryan]);
    }
    if (compareSameScore(ryan)) {
      maxScoreGap = scoreGap;
      answer = [...ryan];
    }

    return;
  }
  const requiredArrows = appeach[idx] + 1;
  if (isLastIdx(idx, appeach.length)) return DFS(idx + 1, 0, [...ryan, remainedArrows], appeach);
  if (requiredArrows <= remainedArrows) DFS(idx + 1, remainedArrows - requiredArrows, [...ryan, requiredArrows], appeach);
  DFS(idx + 1, remainedArrows, [...ryan, 0], appeach);
}

function solution(n, info) {
  DFS(0, n, [], info);
  return answer.length === 0 ? [-1] : answer;
}
