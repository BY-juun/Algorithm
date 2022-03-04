let arr = [];
let find = [];
const solve = () => {
  arr.sort((a, b) => a - b);
  find.forEach((x) => {
    let left = 0;
    let right = arr.length;
    let result = 0;
    while (left <= right) {
      let mid = parseInt((left + right) / 2);
      if (x === arr[mid]) {
        result = 1;
        break;
      } else if (x > arr[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    console.log(result);
  });
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  input[1].split(" ").map((value) => arr.push(Number(value)));
  input[3].split(" ").map((value) => find.push(Number(value)));
  solve();
});
