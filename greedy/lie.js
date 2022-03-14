let know;
let arr = [];
function solve() {
  for (let x of arr) {
    for (let i = 0; i < x.length; i++) {
      if (know.indexOf(x[i]) >= 0) {
        know = [...know, ...x];
        break;
      }
    }
  }
  const set = new Set(know);
  know = [...set];
  console.log(know);
  let answer = 0;
  for (let x of arr) {
    let check = 0;
    for (let i = 0; i < x.length; i++) {
      if (know.indexOf(x[i]) >= 0) {
        check = 1;
        break;
      }
    }
    if (!check) answer++;
  }
  console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, m] = input[0].split(" ").map((value) => Number(value));
  input = input.slice(1);
  know = input[0].split(" ").map((value) => Number(value));
  know.shift();
  input = input.slice(1);
  for (let x of input) {
    let temp = x.split(" ").map((value) => Number(value));
    temp.shift();
    arr.push(temp);
  }
  solve();
  process.exit();
});
