let isVisited;
let visitCount;

function BFS(x, y, computers) {
  let queue = [[x, y]];
  while (queue.length !== 0) {
    let [curPosX, curPosY] = queue.shift();
    console.log(curPosX, curPosY);
    for (let i = 0; i < computers.length; i++) {
      if (computers[curPosY][i] === 1 && curPosY !== i && !isVisited[curPosY][i]) {
        queue.push([curPosY, i]);
        isVisited[curPosY][i] = true;
        isVisited[i][curPosY] = true;
      }
    }
  }
}

function solution(n, computers) {
  var answer = 0;
  isVisited = Array.from({ length: computers.length }, () => Array.from({ length: computers.length }, () => false));
  countArr = Array.from({ length: n }, () => false);

  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers.length; j++) {
      if (i === j) isVisited[i][j] = true;
      if (computers[i][j] === 1 && isVisited[i][j] === false) {
        answer++;
        isVisited[i][j] = true;
        isVisited[j][i] = true;
        BFS(i, j, computers);
      }
    }
  }

  for (let x of isVisited) {
    if (x.filter((value) => value === true).length === 1) answer++;
  }

  return answer;
}
