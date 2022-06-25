function solution(target, blocks) {
  if (blocks.length < 2) return console.log("danger");
  let start = 0;
  let end = blocks.length - 1;

  while (true) {
    if (blocks[start] + blocks[end] === target) return console.log(`yes ${blocks[start]} ${blocks[end]}`);
    else if (blocks[start] + blocks[end] > target) end -= 1;
    else if (blocks[start] + blocks[end] < target) start += 1;
    if (start >= end) return console.log("danger");
  }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  while (input.length !== 0) {
    const hole = Number(input[0]);
    input = input.slice(1);
    const NumOfBlock = Number(input[0]);
    input = input.slice(1);
    const Blocks = [];
    for (let i = 0; i < NumOfBlock; i++) {
      Blocks.push(Number(input[i]));
    }
    input = input.slice(NumOfBlock);
    solution(
      hole * 10000000,
      Blocks.sort((a, b) => a - b)
    );
  }
});
