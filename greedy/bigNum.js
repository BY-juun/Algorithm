function solve(a, b, c) {
  let answer = BigInt(1);
  for (let i = 0; i < b; i++) {
    answer *= BigInt(a);
  }
  console.log(BigInt(answer / BigInt(c)));
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [a, b, c] = input[0].split(" ").map((value) => Number(value));

  solve(a, b, c);
  process.exit();
});
