const solve = (arr) => {
  arr.sort((a, b) => b - a);
  console.log(arr.join(""));
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = [];
  input[0].split("").map((value) => arr.push(Number(value)));
  solve(arr);
});
