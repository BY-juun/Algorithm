function solve(arr) {
  let answer = 0;
  let classRoom = 0;
  const obj = [];
  for (let i = 0; i < arr.length; i++) {
    obj.push({ time: arr[i][0], start: 1 });
    obj.push({ time: arr[i][1], start: -1 });
  }
  obj.sort((a, b) => (a.time === b.time ? a.start - b.start : a.time - b.time));
  obj.forEach((sched) => {
    if (sched.start === -1) classRoom--;
    else if (sched.start === 1) classRoom++;
    answer = classRoom > answer ? classRoom : answer;
  });
  console.log(answer);
}

const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = parseInt(input[0]);
  input = input.slice(1);
  let arr = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    input[i].split(" ").map((value) => temp.push(Number(value)));
    arr.push(temp);
  }
  solve(arr);
});
