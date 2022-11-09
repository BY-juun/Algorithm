const candidate = [];
let isVisited;

function DFS(idx, cards, result) {
  const nextIdx = cards[idx] - 1;
  if (isVisited[nextIdx]) return candidate.push(result);
  isVisited[nextIdx] = true;
  DFS(nextIdx, cards, result + 1);
}

function solution(cards) {
  isVisited = Array.from({ length: cards.length }, () => false);

  for (let curIdx = 0; curIdx < cards.length; curIdx++) {
    if (isVisited[curIdx]) continue;
    isVisited[curIdx] = true;
    DFS(curIdx, cards, 1);
  }
  if (candidate.length < 2) return 0;
  candidate.sort((a, b) => b - a);
  return candidate[0] * candidate[1];
}
