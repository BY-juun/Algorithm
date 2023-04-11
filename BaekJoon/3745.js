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
  solution(input.map((v) => v.trim().split(/\s+/g).map(Number)));
});

function solution(testCases) {
  for (let i = 1; i < testCases.length; i += 2) {
    const arr = testCases[i];

    const lis = [arr[0]];

    for (let k = 1; k < arr.length; k++) {
      let left = 0;
      let right = lis.length;

      while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[k] > lis[mid]) left = mid + 1;
        else right = mid;
      }

      if (right === lis.length) lis.push(arr[k]);
      else lis[right] = arr[k];
    }
    console.log(lis.length);
  }
}
