const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const G = Number(input[0]);
  let start = 1;
  let end = 2;
  let isAnswerExist = false;
  while (end < 100000) {
    const gap = Math.pow(end, 2) - Math.pow(start, 2);
    if (gap === G) {
      isAnswerExist = true;
      console.log(end);
      end++;
    } else if (gap > G) {
      start++;
    } else if (gap < G) {
      end++;
    }
  }
  if (!isAnswerExist) console.log(-1);
});
