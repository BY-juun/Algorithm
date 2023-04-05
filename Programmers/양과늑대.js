const SHEEP = 0;
const WOLF = 1;
const ROOT = 0;

function solution(info, edges) {
  let answer = 0;
  let connectedNode = Array.from({ length: info.length }, () => []);

  for (let i = 0; i < edges.length; i++) {
    let current = edges[i];
    connectedNode[current[0]].push(current[1]); // connectedNode에 연결된 노드를 인덱스에 맞게 push
  }

  function dfs(currentNode, sheep, wolf, possible) {
    let newPossibles = [...possible];
    let currentIdx = newPossibles.indexOf(currentNode);

    if (info[currentNode] === WOLF) wolf++;
    else sheep++;

    answer = Math.max(answer, sheep);

    if (sheep === wolf) return;

    newPossibles.push(...connectedNode[currentNode]);
    newPossibles.splice(currentIdx, 1);

    for (const nextNode of newPossibles) {
      //dfs(ne);
    }
  }
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);

채ㅜ내;
