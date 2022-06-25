function solution(arr, start, dest, Bus) {
  arr[start] = 0;
  let queue = [{ to: start, cost: 0 }];
  while (queue.length !== 0) {
    let { to } = queue.shift();
    for (const next of Bus[to]) {
      if (arr[next.to] > arr[to] + next.cost) {
        arr[next.to] = arr[to] + next.cost;
        queue.push(next);
      }
    }
  }
  console.log(arr[dest]);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const NumOfCity = Number(input[0]);
  const NumOfBus = Number(input[1]);
  input = input.slice(2);
  const arr = Array.from({ length: NumOfCity }, () => Infinity);
  const Bus = Array.from({ length: NumOfCity }, () => []);
  for (let i = 0; i < NumOfBus; i++) {
    const [start, end, cost] = input[i].split(" ").map(Number);
    Bus[start - 1].push({ to: end - 1, cost });
  }
  input = input.slice(NumOfBus);
  const [start, dest] = input[0].split(" ").map(Number);
  solution(arr, start - 1, dest - 1, Bus);
});
