const solve = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let answer = "";
    let num = Number(arr[i][0]);
    let string = arr[i][1];
    for (let j = 0; j < string.length; j++) {
      answer = answer.concat(string[j].repeat(num));
    }
    console.log(answer);
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
    let temp = [];
    input[i].split(" ").map((value) => temp.push(value));
    arr.push(temp);
  }
  solve(arr);
});
