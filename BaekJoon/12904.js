function solution(S, T) {
  let start = S;
  let target = T;
  while (start.length !== target.length) {
    if (target[target.length - 1] === "A") target = target.slice(0, target.length - 1);
    else
      target = target
        .slice(0, target.length - 1)
        .split("")
        .reverse()
        .join("");
  }
  return start === target ? 1 : 0;
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const S = input[0];
  const T = input[1];
  console.log(solution(S, T));
});
