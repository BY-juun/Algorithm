//LIS
function binarySearch(target, arr, result) {
  let start = 0;
  let end = result.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (result[mid] < target) start = mid + 1;
    else if (result[mid] > target) end = mid - 1;
    else return mid;
  }
  return start;
}

function solve(arr) {
  const result = [arr[0]];
  arr.slice(1).forEach((v) => {
    if (result[result.length - 1] < v) result.push(v);
    else {
      let idx = binarySearch(v, arr, result);
      result[idx] = v;
    }
  });
  console.log(result.length);
}

const StrToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const arr = StrToNum(input[1]);
  solve(arr);
});
