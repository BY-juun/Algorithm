const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  solve(n, arr);
});

function solve(n, arr) {
  const hole = Array.from({ length: n }, () => 0);
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let flag = false;
    for (let j = 0; j < hole.length; j++) {
      if (hole[j] === item) {
        flag = true;
        break;
      }
      if (hole[j] === 0) {
        hole[j] = item;
        flag = true;
        break;
      }
    }
    if (flag) continue;

    answer++;

    let isAllItemReuse = true;

    let finalPos = 0;
    let finalPosValue = 0;

    for (let j = 0; j < hole.length; j++) {
      let isReuse = false;
      const currentHoleItem = hole[j];
      for (let k = i + 1; k < arr.length; k++) {
        if (currentHoleItem === arr[k]) {
          if (finalPosValue < k) {
            finalPosValue = k;
            finalPos = j;
          }
          isReuse = true;
          break;
        }
      }

      if (!isReuse) {
        hole[j] = item;
        isAllItemReuse = false;
        break;
      }
    }

    if (isAllItemReuse) {
      hole[finalPos] = item;
    }
  }

  console.log(answer);
}
