function solution(house, currentGas, gasStation) {}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  const gasStation = [];
  for (let i = 1; i <= n; i++) {
    const [dist, gas] = input[i].split(" ").map(Number);
    gasStation.push({ dist, gas });
  }
  const [house, currentGas] = input[n + 1].split(" ").map(Number);
  solution(house, currentGas, gasStation);
});
