const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input.slice(1));
});

function solution(strList) {
  strList.forEach((str) => {
    console.log(isPalindrome(str));
  });
}

function isPalindrome(str) {
  let answer = 2;

  dfs(str, 0, str.length - 1, false);

  function dfs(str, leftIdx, rightIdx, isAlreadyDelete) {
    if (leftIdx > rightIdx) {
      if (isAlreadyDelete && answer !== 0) {
        answer = 1;
      }

      if (!isAlreadyDelete) {
        answer = 0;
      }
      return;
    }
    if (str[leftIdx] === str[rightIdx]) {
      dfs(str, leftIdx + 1, rightIdx - 1, isAlreadyDelete);
    } else {
      if (isAlreadyDelete) {
        return;
      } else {
        dfs(str, leftIdx + 1, rightIdx, true);
        dfs(str, leftIdx, rightIdx - 1, true);
      }
    }
  }

  return answer;
}
