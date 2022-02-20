function solve(arr) {
  let answer = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      answer += arr[i] - arr[i - 1] + 1;
      arr[i] = arr[i - 1] - 1;
    }
  }
  console.log(answer);
}

const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const level = Number(input[0]);
  input = input.slice(1);
  let arr = [];
  for (let i = level - 1; i >= 0; i--) {
    arr.push(input[i]);
  }
  solve(arr);
});
