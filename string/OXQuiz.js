const solve = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let score = Array.from({ length: arr[i].length }, () => 0);
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "O") {
        if (j === 0) score[j] = 1;
        else {
          if (score[j - 1] !== 0) score[j] = score[j - 1] + 1;
          else score[j] = 1;
        }
      }
    }
    console.log(score.reduce((acc, cur) => acc + cur));
  }
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = Number(input[0]);
  input = input.slice(1);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(input[i]);
  }
  solve(arr);
});
