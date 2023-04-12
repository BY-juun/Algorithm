/* eslint-disable no-undef */
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
  let i = 0;

  while (i < input.length) {
    let hole = Number(input[i++]);
    let legoCount = Number(input[i++]);
    const legoArr = [];
    for (let j = 0; j < legoCount; j++) {
      legoArr.push(Number(input[i]));
      i++;
    }
    solution(
      hole * 10000000,
      legoArr.sort((a, b) => a - b),
    );
  }
});

function solution(hole, legoArr) {
  let answer = null;
  let left = 0;
  let right = legoArr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const sum = legoArr[left] + legoArr[right];

    if (sum === hole)
      return console.log(`yes ${legoArr[left]} ${legoArr[right]}`);

    if (sum < hole) left = mid + 1;
    else right = mid - 1;
  }

  if (answer) console.log(`yes ${answer[0]} ${answer[1]}`);
  else console.log('danger');
}
