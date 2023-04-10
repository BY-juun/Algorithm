const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map(Number);
  solution(M, arr);
});

function solution(m, arr) {
  if (arr.length === 1) {
    console.log(arr[0] * m);
    return;
  }
  let left = 0;
  let right = Math.max(...arr) * m;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    const canHandleCount = arr.reduce(
      (acc, cur) => acc + Math.floor(mid / cur),
      0
    );

    if (canHandleCount < m) left = mid + 1;
    else right = mid - 1;
  }

  console.log(right + 1);
}
