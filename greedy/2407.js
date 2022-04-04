let n, m;
let answer = 0;
let arr;

const add_bigNum = (num1, num2) => {
  let result = "";
  let sum = 0;
  while (num1.length > 0 || num2.length > 0 || sum > 0) {
    if (num1.length > 0) {
      sum += +num1[num1.length - 1];
      num1 = num1.slice(0, -1);
    }
    if (num2.length > 0) {
      sum += +num2[num2.length - 1];
      num2 = num2.slice(0, -1);
    }
    result += (sum % 10).toString();
    sum = Math.floor(sum / 10);
  }
  result = result.split("").reverse().join("");
  return result;
};

const solve = () => {
  arr[0][0] = "1";
  arr[1][0] = "1";
  arr[1][1] = "1";
  for (let i = 2; i < n + 1; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) arr[i][j] = "1";
      else arr[i][j] = add_bigNum(arr[i - 1][j - 1], arr[i - 1][j]);
    }
  }
  console.log(arr[n][m]);
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  [n, m] = input[0].split(" ").map((value) => Number(value));
  arr = Array.from({ length: n + 1 }, (_, idx) => Array.from({ length: idx + 1 }, () => "0"));
  solve();
});
