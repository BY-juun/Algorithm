/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const strToNum = (str) => str.split(' ').map(Number);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(strToNum(input[1]).sort((a, b) => a - b));
});
function solution(arr) {
  let left = 0;
  let right = arr.length - 1;
  let answer_sum = Number.MAX_SAFE_INTEGER;
  let answer = [0, 0];

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) return console.log(`${arr[left]} ${arr[right]}`);

    if (Math.abs(sum) < answer_sum) {
      answer_sum = Math.abs(sum);
      answer = [arr[left], arr[right]];
    }

    if (sum > 0) right--;
    else left++;
  }

  console.log(`${answer[0]} ${answer[1]}`);
}
