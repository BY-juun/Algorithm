const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = [];
  input[0].split(" ").map((value) => arr.push(value));
  let answer = 0;
  for (let x of arr) {
    if (x.length > 1) answer++;
  }
  console.log(answer);
});
