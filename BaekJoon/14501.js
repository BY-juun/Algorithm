let answer = Number.MIN_SAFE_INTEGER;

function Recursive(curIdx, curTime, AccPay, PayArr) {
  if (curIdx === PayArr.length) {
    const AccResult = AccPay.reduce((acc, cur) => acc + cur, 0);
    answer = answer > AccResult ? answer : AccResult;
    return;
  }
  if (curIdx >= curTime) {
    Recursive(curIdx + 1, curTime + 1, [...AccPay], PayArr);
    if (curTime + PayArr[curIdx][0] <= PayArr.length) Recursive(curIdx + 1, curTime + PayArr[curIdx][0], [...AccPay, PayArr[curIdx][1]], PayArr);
  } else {
    Recursive(curIdx + 1, curTime, [...AccPay], PayArr);
  }
}

function solution(pay) {
  Recursive(0, 0, [], pay);
  console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const pay = [];
  input.slice(1).forEach((v) => {
    pay.push(v.split(" ").map(Number));
  });
  solution(pay);
});
