function solution(n, probability) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let answer = 0;

  DFS(1, 0, 15, 15, [[15, 15]]);

  console.log(answer);

  function DFS(accProbabilty, count, x, y, accPos) {
    if (count === n) return (answer += accProbabilty);

    for (let dir = 0; dir < 4; dir++) {
      if (probability[dir] === 0) continue;

      const nextX = x + dx[dir];
      const nextY = y + dy[dir];

      if (isVisitedPos(accPos, nextX, nextY)) continue;

      DFS(accProbabilty * probability[dir], count + 1, nextX, nextY, [...accPos, [nextX, nextY]]);
    }
  }

  function isVisitedPos(accPos, x, y) {
    return accPos.find((v) => v[0] === x && v[1] === y) ? true : false;
  }
}

const strToBigInt = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const token = input[0].split(" ");
  solution(
    Number(token[0]),
    token.slice(1).map((v) => (v === "0" ? 0 : Number(v) / 100))
  );
});
