const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = [];
  let n = Number(input[0]);
  input = input.slice(1);
  input[0].split(" ").map((value) => arr.push(Number(value)));
  const max = Math.max(...arr);
  let answer = 0;
  for (let x of arr) {
    answer += (x / max) * 100;
  }
  console.log(answer / arr.length);
});
