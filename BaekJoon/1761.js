function solution() {}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  input = input.slice(1);
  console.log("input", input);

  for (let i = 0; i < n - 1; i++) {
    console.log(input[i].split(" ").map(Number));
  }
  input = input.slice(n);
  console.log("input", input);
  input.forEach((input) => {
    console.log(input.split(" ").map(Number));
  });
});
