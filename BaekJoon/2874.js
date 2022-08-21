const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const game = [];
  input.slice(1).forEach((v) => {
    game.push(Number(input[0]));
  });
  if (game.length === 1) {
    console.log("0");
    return;
  }
  let level = game[game.length - 1];
  let answer = 0;
  for (let i = game.length - 2; i >= 0; i--) {
    if (game[i] >= level) {
      answer += game[i] - (level - 1);
      level = level - 1;
    }
  }
  console.log(answer);
});
