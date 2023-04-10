const strToNum = (str) => str.split(" ").map(Number);

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(strToNum(input[1]).sort((a, b) => a - b));
});

function solution(arr) {
  let answer = 0;
  arr.forEach((item, idx) => {
    if (isGood(item, idx)) answer++;
  });

  console.log(answer);

  function isGood(item, idx) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[left] + arr[right];

      if (sum === item) {
        if (left !== idx && right !== idx) return true;
        else if (left === idx) left++;
        else if (right === idx) right--;
      } else if (sum > item) right--;
      else left++;
    }
    return false;
  }
}
