function solve(arr, s) {
  let answer = Infinity;
  let left = 0;
  let right = 0;
  let sum = arr[0];

  while (true) {
    if (sum < s) {
      if (right + 1 === arr.length) break;
      right++;
      sum += arr[right];
    } else {
      const length = right - left + 1;
      answer = answer > length ? length : answer;
      sum -= arr[left];
      left++;
    }
  }
  console.log(answer === Infinity ? 0 : answer);
}

const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, s] = strToNum(input[0]);
  const arr = strToNum(input[1]);
  solve(arr, s);
});
