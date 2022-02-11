function solve(origin, search) {
  let answer = 0;
  for (let i = 0; i < origin.length; i++) {
    if (origin[i] === search[0]) {
      let j;
      for (j = 0; j < search.length; j++) {
        if (origin[i + j] !== search[j]) break;
      }
      if (j === search.length) {
        i += search.length - 1;
        answer++;
      }
    }
  }
  console.log(answer);
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
  let totalStr = input[0];
  let searchStr = input[1];
  solve(totalStr, searchStr);
  process.exit();
});
