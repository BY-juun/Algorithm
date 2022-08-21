const Indicator = {
  R: { idx: 1, score: 0 },
  T: { idx: 1, score: 0 },
  C: { idx: 2, score: 0 },
  F: { idx: 2, score: 0 },
  J: { idx: 3, score: 0 },
  M: { idx: 3, score: 0 },
  A: { idx: 4, score: 0 },
  N: { idx: 4, score: 0 },
};

function AddScore(disagreement, agreement, choice) {
  if (choice === 4) return;
  else if (choice < 4) Indicator[disagreement].score += Math.abs(4 - choice);
  else Indicator[agreement].score += choice - 4;
}

function Sorting(a, b) {
  if (a.score !== b.score) return b.score - a.score;
  else return a.type - b.type;
}

function solution(survey, choices) {
  for (let i = 0; i < survey.length; i++) {
    const [disagreement, agreement] = survey[i].split("");
    AddScore(disagreement, agreement, choices[i]);
  }
  const answer = Array.from({ length: 4 }, () => []);
  for (const key of Object.keys(Indicator)) {
    answer[Indicator[key].idx - 1].push({ type: key, score: Indicator[key].score });
  }
  answer.forEach((item) => item.sort(Sorting));
  return answer.map((v) => v[0].type).join("");
}
