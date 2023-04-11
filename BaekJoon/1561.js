const strToNum = (str) => str.split(" ").map(Number);

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n] = strToNum(input[0]);
  solution(n, strToNum(input[1]));
});

function solution(n, arr) {
  let left = 0;
  let right = Math.max(...arr) * n;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    let temp = arr.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (temp > n) right = mid - 1;
    else left = mid + 1;
  }

  let time = right;
  let lastIdx = 0;

  for (let i = 0; i < time; i++) {}
}
