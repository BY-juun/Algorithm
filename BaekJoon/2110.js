function solve(c, houses) {
  let low = 1;
  let high = houses[houses.length - 1] - houses[0] + 1;

  while (true) {
    if (low >= high) break;
    const mid = Math.floor((low + high) / 2);
    const installHouseCount = getInstallNumber(houses, mid);
    if (installHouseCount < c) high = mid;
    else low = mid + 1;
  }
  console.log(low - 1);
}

function getInstallNumber(houses, dist) {
  let prevHouse = houses[0];
  let count = 1;
  for (let i = 1; i < houses.length; i++) {
    const curHouse = houses[i];
    if (curHouse - prevHouse >= dist) {
      count++;
      prevHouse = curHouse;
    }
  }
  return count;
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, c] = input[0].split(" ").map(Number);
  const houses = input.slice(1).map(Number);
  solve(
    c,
    houses.sort((a, b) => a - b)
  );
});
