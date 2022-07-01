function solution(user, main, sub) {
  let answer = 0;
  user.forEach((u) => {
    answer += 1;
    u -= main;
    if (u > 0) {
      if (u % sub === 0) {
        answer += Math.floor(u / sub);
      } else {
        answer += Math.floor(u / sub) + 1;
      }
    }
  });
  console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const NumOfExam = Number(input[0]);
  input = input.slice(1);
  const examinee = input[0].split(" ").map(Number);
  input = input.slice(1);
  const [main, sub] = input[0].split(" ").map(Number);
  solution(examinee, main, sub);
});
