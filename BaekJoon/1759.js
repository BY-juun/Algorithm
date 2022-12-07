const VOWS = ["a", "e", "i", "o", "u"];

const comb = {
  vows: [],
  cons: [],
};

function SortCharacters(a, b) {
  return a.charCodeAt() - b.charCodeAt();
}

function SortString(a, b) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i], b[i]);
    if (a[i].charCodeAt() > b[i].charCodeAt()) return true;
    else if (a[i].charCodeAt() < b[i].charCodeAt()) return false;
  }
}

function getCombination(arr, curArr, curIdx, limitCount, type) {
  if (curArr.length === limitCount) return comb[type].push(curArr);
  if (curIdx >= arr.length) return;
  getCombination(arr, [...curArr, arr[curIdx]], curIdx + 1, limitCount, type);
  getCombination(arr, [...curArr], curIdx + 1, limitCount, type);
}

function solve(L, C, candidate) {
  const answers = [];
  const vows = [];
  const cons = [];

  candidate.sort(SortCharacters);

  candidate.forEach((chr) => {
    if (VOWS.includes(chr)) vows.push(chr);
    else cons.push(chr);
  });

  for (let vowCount = 1; vowCount <= vows.length; vowCount++) {
    const conCount = L - vowCount;
    if (conCount < 2) break;
    comb.vows = [];
    comb.cons = [];
    getCombination(vows, [], 0, vowCount, "vows");
    getCombination(cons, [], 0, conCount, "cons");
    const { vows: vowArr, cons: conArr } = comb;

    vowArr.forEach((vow) => {
      conArr.forEach((con) => {
        const pwd = [...vow, ...con].sort(SortCharacters).join("");
        answers.push(pwd);
      });
    });
  }
  answers.sort();
  console.log(answers.join("\n"));
}
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [L, C] = input[0].split(" ").map(Number);
  const candidate = input[1].split(" ");
  solve(L, C, candidate);
});
