const convertStrToNum = (str) => str.split(' ').map(Number);
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(convertStrToNum(input[1]));
});

function solution(arr) {
  const length = arr.length;
  const dp_i = Array.from({ length }, () => 1);
  const dp_d = Array.from({ length }, () => 1);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) dp_i[i] = Math.max(dp_i[j] + 1, dp_i[i]);
    }
  }

  for (let i = length - 1; i >= 0; i--) {
    for (let j = length - 1; j > i; j--) {
      if (arr[i] > arr[j]) dp_d[i] = Math.max(dp_d[j] + 1, dp_d[i]);
    }
  }

  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < length; i++) {
    answer = Math.max(answer, dp_d[i] + dp_i[i] - 1);
  }

  console.log(answer);
}
