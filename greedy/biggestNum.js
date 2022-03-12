let n, k;
let original;
let arr = [];
let arrTemp = [];
const solve = () => {
  arrTemp.sort((a, b) => a - b);
  arrTemp = arrTemp.slice(0, k);
  console.log(arrTemp);
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  [n, k] = input[0].split(" ").map((value) => Number(value));
  original = input[1];
  input[1].split("").map((value) => {
    arrTemp.push(Number(value));
    arr.push(Number(value));
  });
  solve();
});
