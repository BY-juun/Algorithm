const strToNum = (str) => str.split(" ").map(Number);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(strToNum(input[1]));
});
function solution(arr) {
  const lis = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let left = 0,
      right = lis.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[i] > lis[mid]) left = mid + 1;
      else right = mid;
    }

    if (right === lis.length) lis.push(arr[i]);
    else lis[right] = arr[i];
  }

  console.log(lis.length);
}
