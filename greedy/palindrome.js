const solve = (str) => {
  const len = str.length;
  let arr = Array.from({ length: 26 }, () => 0);
  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - 65]++;
  }
  let count = 0;
  let answer = "";
  let answerReverse = "";
  let center = "";
  if (len % 2 === 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0 && arr[i] % 2 === 1) {
        console.log("I'm Sorry Hansoo");
        return;
      }
      if (arr[i] > 0) {
        answer += String.fromCharCode(i + 65).repeat(arr[i] / 2);
        answerReverse += String.fromCharCode(i + 65).repeat(arr[i] / 2);
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0 && arr[i] % 2 === 1) {
        count++;
        center += String.fromCharCode(i + 65);
      }
      if (count > 1) {
        console.log("I'm Sorry Hansoo");
        return;
      }
      if (arr[i] > 0) {
        answer += String.fromCharCode(i + 65).repeat(arr[i] / 2);
        answerReverse += String.fromCharCode(i + 65).repeat(arr[i] / 2);
      }
    }
  }
  console.log(answer + center + answerReverse.split("").reverse().join(""));
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solve(input[0]);
});
