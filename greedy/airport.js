let gate;
let airplane;
let arr = [];
const solve = () => {
  let gateArr = Array.from({ length: gate + 1 }, () => 0);
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let check = 0;
    for (let j = arr[i]; j > 0; j--) {
      if (gateArr[j] === 0) {
        check = 1;
        gateArr[j] = 1;
        answer++;
        break;
      }
    }
    if (!check) break;
  }
  console.log(answer);
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  gate = Number(input[0]);
  airplane = Number(input[1]);
  input = input.slice(2);
  for (let i = 0; i < airplane; i++) {
    arr.push(Number(input[i]));
  }
  solve();
  process.exit();
});
