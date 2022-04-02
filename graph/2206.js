let row, col;
let graph = [];
let isVisited;
let answer = Number.MAX_VALUE;
let isAnswerExist = 0;
let dx = [1, 0, 0, -1];
let dy = [0, 1, -1, 1];

const solve = () => {
  isVisited[0][0].visitied = 1;
  isVisited[0][0].count = 1;
  DFS(0, 0, 1, 0);
};

const DFS = (xPos, yPos, count, isBreak) => {
  if (xPos + 1 === row && yPos + 1 === col) {
    isAnswerExist = 1;
    if (answer > count) answer = count;
    return;
  }
  for (let i = 0; i < 4; i++) {
    const nextX = xPos + dx[i];
    const nextY = yPos + dy[i];
    if (nextX >= 0 && nextX < row && nextY >= 0 && nextY < col) {
      if (isBreak) {
        //이미 벽을 깬 기록이 있을 경우, 더이상 깰 수 없기 때문에, 무조건 뚫려있는 곳으로만 가야한다.
        if (!graph[nextX][nextY]) {
          if (!isVisited[nextX][nextY].visited) {
            //아직 방문하지 않은 곳인 경우
            isVisited[nextX][nextY].visitied = 1;
            isVisited[nextX][nextY].count = count + 1;
            DFS(nextX, nextY, count + 1, 1);
          } else {
            //방문한 경우, 이때는 isVisited count 체크
            if (count + 1 < isVisited[nextX][nextY].count) {
              isVisited[nextX][nextY].visitied = 1;
              isVisited[nextX][nextY].count = count + 1;
              DFS(nextX, nextY, count + 1, 1);
            }
          }
        }
      } else {
        //아직 벽을 깨지 않았을 경우
        if (!isVisited[nextX][nextY]) {
          if (graph[nextX][nextY]) {
            //벽인경우
            isVisited[nextX][nextY].visited = 1;
            isVisited[nextX][nextY].count = count + 1;
            DFS(nextX, nextY, count + 1, 1);
          } else {
            isVisited[nextX][nextY].visited = 1;
            isVisited[nextX][nextY].count = count + 1;
            DFS(nextX, nextY, count + 1, 0);
          }
        } else {
          if (count + 1 < isVisited[nextX][nextY].count) {
            if (graph[nextX][nextY]) {
              isVisited[nextX][nextY].visited = 1;
              isVisited[nextX][nextY].count = count + 1;
              DFS(nextX, nextY, count + 1, 1);
            } else {
              isVisited[nextX][nextY].visited = 1;
              isVisited[nextX][nextY].count = count + 1;
              DFS(nextX, nextY, count + 1, 0);
            }
          }
        }
      }
    }
  }
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  [row, col] = input[0].split(" ").map((value) => Number(value));
  isVisited = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => {
      return {
        visitied: 0,
        count: Number.MAX_SAFE_INTEGER,
      };
    })
  );
  input = input.slice(1);
  for (let x of input) {
    let temp = x.split("").map((value) => Number(value));
    graph.push(temp);
  }
  solve();
  if (!isAnswerExist) console.log(-1);
  else console.log(answer);
});
