function solution(start, lines) {
  const arr = Array.from({ length: lines.length }, () => Infinity);
  arr[start] = 0;
  let queue = [{ to: start, cost: 0 }];
  while (queue.length !== 0) {
    const { to } = queue.shift();
    lines[to].forEach((next) => {
      if (arr[next.to] > next.cost + arr[to]) {
        arr[next.to] = next.cost + arr[to];
        queue.push(next);
      }
    });
  }
  const result = arr.filter((v) => v !== Infinity);
  console.log(result.length, Math.max(...result));
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const NumOfCase = Number(input[0]);
  input = input.slice(1);
  for (let cases = 0; cases < NumOfCase; cases++) {
    const [n, d, c] = input[0].split(" ").map(Number);
    input = input.slice(1);
    const lines = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < d; i++) {
      const [a, b, s] = input[i].split(" ").map(Number);
      lines[b].push({ to: a, cost: s });
    }
    input = input.slice(d);
    solution(c, lines);
  }
});
