const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const items = [];
  input.slice(1).forEach((line) => {
    const [from, to] = line.split(" ").map(Number);
    items.push({ time: from, type: 1 });
    items.push({ time: to, type: -1 });
  });
  items.sort((a, b) => (a.time === b.time ? a.type - b.type : a.time - b.time));
  solve(items);
});

function solve(items) {
  let answer = Number.MIN_SAFE_INTEGER;
  let classRoom = 0;
  items.forEach((item) => {
    if (item.type === -1) classRoom--;
    else classRoom++;
    answer = Math.max(classRoom, answer);
  });
  console.log(answer);
}
