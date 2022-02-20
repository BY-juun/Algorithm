function solve(arr) {
  let unit = [25, 10, 5, 1];
  for (let money of arr) {
    let result = [0, 0, 0, 0];
    for (let i = 0; i < unit.length; i++) {
      while (money >= unit[i]) {
        result[i]++;
        money = money - unit[i];
      }
    }
    console.log(`${result[0]} ${result[1]} ${result[2]} ${result[3]}`);
  }
}

const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = Number(input[0]);
  input = input.slice(1);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Number(input[i]));
  }
  solve(arr);
});
