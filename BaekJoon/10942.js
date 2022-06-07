function solution(test, arr) {
  const [from, to] = test.split(" ");
  const origin = arr.slice(from - 1, to);
  const reverse = [...origin].reverse();
  return JSON.stringify(origin) === JSON.stringify(reverse) ? 1 : 0;
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const arr = input[1].split(" ");
  input = input.slice(3);
  for (const test of input) {
    console.log(solution(test, arr));
  }
});
