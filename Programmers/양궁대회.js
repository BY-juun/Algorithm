function solution(n, appeach) {
  let currentScoreGap = Number.MIN_SAFE_INTEGER;
  var answer = [];

  const getWinnerAndScoreGap = (ryan) => {
    let ryanTotalScore = 0;
    let appeachTotalScore = 0;
    for (let i = 0; i < 11; i++) {
      const currentScore = 10 - i;
      if (!ryan[i] && !appeach[i]) continue;
      if (ryan[i] > appeach[i]) ryanTotalScore += currentScore;
      else appeachTotalScore += currentScore;
    }

    const scoreGap = Math.abs(ryanTotalScore - appeachTotalScore);

    return ryanTotalScore > appeachTotalScore ? { winner: "ryan", scoreGap } : { winner: "appeach", scoreGap };
  };

  const compareWithMinScore = (ryan) => {
    for (let i = 10; i >= 0; i--) {
      if (ryan[i] > answer[i]) return true;
      else if (ryan[i] < answer[i]) return false;
    }
    return false;
  };

  const compareRyanAndAppeach = (ryan) => {
    const { winner, scoreGap } = getWinnerAndScoreGap(ryan);

    if (winner === "appeach") return;
    if (currentScoreGap === scoreGap) {
      const isCurrentRyanRecordIsHigher = compareWithMinScore(ryan);
      if (isCurrentRyanRecordIsHigher) answer = ryan;
    } else {
      if (currentScoreGap < scoreGap) {
        currentScoreGap = scoreGap;
        answer = ryan;
      }
    }
  };

  const DFS = (accArr, curIdx, remainArrow) => {
    if (remainArrow === 0) return compareRyanAndAppeach(accArr);
    if (curIdx === 11) {
      accArr[10] = remainArrow;
      return compareRyanAndAppeach(accArr);
    }

    const numberOfAppeachShoot = appeach[curIdx];

    if (remainArrow >= numberOfAppeachShoot + 1) {
      accArr[curIdx] = numberOfAppeachShoot + 1;
      DFS([...accArr], curIdx + 1, remainArrow - accArr[curIdx]);
    }

    accArr[curIdx] = 0;
    DFS([...accArr], curIdx + 1, remainArrow);
  };

  DFS(
    Array.from({ length: 11 }, () => 0),
    0,
    n
  );
  return answer.length === 0 ? [-1] : answer;
}

const answer = solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]);

console.log(answer);
