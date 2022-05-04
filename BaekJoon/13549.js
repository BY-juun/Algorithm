let startPos, endPos;
let isVisited = Array.from({ length: 100000 }, () => 0);
let answer;

const solve = () => {
  if (startPos >= endPos) {
    answer = startPos - endPos;
  } else {
    BFS();
  }
};

const BFS = () => {
  let queue = [[startPos, 0]];
  isVisited[startPos] = 1;
  while (queue.length !== 0) {
    let [curPos, time] = queue.shift();
    if (curPos === endPos) {
      answer = time;
      return;
    }
    for (let nextPos of [curPos * 2, curPos + 1, curPos - 1]) {
      if (!isVisited[nextPos] && nextPos >= 0 && nextPos <= 100000) {
        isVisited[nextPos] = 1;
        if (nextPos === curPos * 2) {
          queue.unshift([nextPos, time]);
        } else {
          queue.push([nextPos, time + 1]);
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
  [startPos, endPos] = input[0].split(" ").map((value) => Number(value));
  solve();
  console.log(answer);
});
