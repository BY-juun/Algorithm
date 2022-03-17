let n, e;

let should = [];
let isVisited;

const getMin = (vertex) => {
  let min = Infinity;
  let idx = 0;
  for (let i = 0; i < vertex.length; i++) {
    if (min > vertex[i]) {
      min = vertex[i];
      idx = i;
    }
  }
  return idx;
};

function solve(arr, startPos, endPos) {
  if (startPos === endPos) return 0;
  let v = arr[startPos - 1];
  let count = 0;
  let end = v.length;
  let min = 0;
  let startV = v;
  isVisited[startPos - 1] = true;

  while (count < end) {
    const idx = getMin(startV);
    min += startV[idx];
    const next = arr[idx];
    for (let i = 0; i < v.length; i++) {
      if (v[i] > next[i] + min) {
        v[i] = next[i] + min;
      }
    }
    startV = arr[idx];
    count++;
  }
  return v[endPos - 1];
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  [n, e] = input[0].split(" ").map((value) => Number(value));
  input = input.slice(1);
  let arr, arr2, arr3, arr4, arr5, arr6;
  arr = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
  arr2 = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
  arr3 = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
  arr4 = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
  arr5 = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
  arr6 = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));

  isVisited = Array.from({ length: n }, () => false);
  for (let i = 0; i < e; i++) {
    let temp = input[i].split(" ").map((value) => Number(value));
    arr[temp[0] - 1][temp[1] - 1] = temp[2];
    arr2[temp[0] - 1][temp[1] - 1] = temp[2];
    arr3[temp[0] - 1][temp[1] - 1] = temp[2];
    arr4[temp[0] - 1][temp[1] - 1] = temp[2];
    arr5[temp[0] - 1][temp[1] - 1] = temp[2];
    arr6[temp[0] - 1][temp[1] - 1] = temp[2];
    arr[temp[1] - 1][temp[0] - 1] = temp[2];
    arr2[temp[1] - 1][temp[0] - 1] = temp[2];
    arr3[temp[1] - 1][temp[0] - 1] = temp[2];
    arr4[temp[1] - 1][temp[0] - 1] = temp[2];
    arr5[temp[1] - 1][temp[0] - 1] = temp[2];
    arr6[temp[1] - 1][temp[0] - 1] = temp[2];
  }
  input[e].split(" ").map((value) => should.push(Number(value)));
  let result1 = solve(arr2, should[0], should[1]) + solve(arr, 1, should[0]) + solve(arr3, should[1], arr.length);
  let result2 = solve(arr5, should[1], should[0]) + solve(arr4, 1, should[1]) + solve(arr6, should[0], arr.length);
  const result = result1 > result2 ? result2 : result1;
  console.log(result === Infinity ? -1 : result);
});
