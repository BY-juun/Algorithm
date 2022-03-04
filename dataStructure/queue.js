let queue = [];
const doTask = (arr) => {
  let answer = "";
  for (let str of arr) {
    let temp = str.split(" ");
    if (temp?.length === 2) {
      queue.push(Number(temp[1]));
    } else {
      const len = queue.length;
      if (str === "pop") {
        if (len > 0) answer += queue.shift() + "\n";
        else answer += -1 + "\n";
      } else if (str === "size") {
        answer += len + "\n";
      } else if (str === "empty") {
        answer += len === 0 ? 1 + "\n" : 0 + "\n";
      } else if (str === "front") {
        if (len > 0) answer += queue[0] + "\n";
        else answer += -1 + "\n";
      } else if (str === "back") {
        if (len > 0) answer += queue[len - 1] + "\n";
        else answer += -1 + "\n";
      }
    }
  }
  console.log(answer);
};

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  input = input.slice(1);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(input[i]);
  }
  doTask(arr);
});
