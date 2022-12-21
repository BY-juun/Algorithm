function solve(words) {
  let answer = 0;
  const wordValue = {};
  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      const chr = word[i];
      if (!wordValue[chr]) wordValue[chr] = 0;
      const pow = word.length - 1 - i;
      wordValue[chr] += 10 ** pow;
    }
  });
  const values = Object.values(wordValue).sort((a, b) => b - a);
  let number = 9;
  values.forEach((value) => {
    answer += number * value;
    number--;
  });
  console.log(answer);
}

const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const words = [];
  input.slice(1).forEach((word) => {
    words.push(word);
  });
  solve(words);
});
