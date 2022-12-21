const combination = [];
const POS = {
  BLANK: 0,
  HOUSE: 1,
  CHICKEN: 2,
};

function getDist(x1, x2, y1, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function getCombination(curIdx, limit, candidates, accArr) {
  if (accArr.length === limit) return combination.push(accArr);

  if (curIdx >= candidates.length) return;
  getCombination(curIdx + 1, limit, candidates, [...accArr, candidates[curIdx]]);
  getCombination(curIdx + 1, limit, candidates, [...accArr]);
}

function getPos(graph) {
  const { length } = graph;
  const store = [];
  const house = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (graph[i][j] === POS.CHICKEN) store.push([i, j]);
      if (graph[i][j] === POS.HOUSE) house.push([i, j]);
    }
  }
  return { store, house };
}

function getChickenLength(stores, houses) {
  let sum = 0;
  houses.forEach((house) => {
    const [houseX, houseY] = house;
    let chickenLength = Number.MAX_SAFE_INTEGER;
    stores.forEach((store) => {
      const [storeX, storeY] = store;
      const dist = getDist(houseX, storeX, houseY, storeY);
      chickenLength = Math.min(chickenLength, dist);
    });
    sum += chickenLength;
  });
  return sum;
}

function solve(m, graph) {
  let answer = Number.MAX_SAFE_INTEGER;
  const { store, house } = getPos(graph);
  getCombination(0, m, store, []);
  combination.forEach((comb) => {
    const length = getChickenLength(comb, house);
    answer = Math.min(answer, length);
  });
  console.log(answer);
}

const strToNum = (str) => str.split(" ").map(Number);
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = strToNum(input[0]);
  const graph = [];
  input.slice(1).forEach((row) => {
    graph.push(strToNum(row));
  });
  solve(m, graph);
});
