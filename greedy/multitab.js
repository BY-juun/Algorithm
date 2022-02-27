let hole;
let arr = [];
let n;
let m;
const solve = () => {
  let answer = 0;
  for (let i = 0; i < m; i++) {
    let item = arr[i];
    let check = 0;
    for (let j = 0; j < n; j++) {
      //빈공간이 있거나, 이미 해당 아이템을 사용하고 있는 경우에는 이 for문에서 걸림.
      if (hole[j] === item) {
        check = 1;
        break;
      } else if (hole[j] === 0) {
        hole[j] = item;
        check = 1;
        break;
      }
    }
    if (check === 0) {
      //다 돌았지만, 들어갈 공간을 찾지못했을 때, 이때는 뭔가를 빼긴해야한다.
      answer++;
      let isAllItemReuse = true;
      let finalPos = 0;
      let finalPosValue = 0;
      for (let j = 0; j < n; j++) {
        // 멀티탭의 용품들이 후에 재사용되는지 확인
        let reuse = false;
        for (let k = i; k < m; k++) {
          if (hole[j] === arr[k]) {
            if (finalPosValue < k) {
              finalPos = j;
              finalPosValue = k;
            }
            reuse = true;
            break;
          }
        }
        if (!reuse) {
          //재사용되지 않는다면, 그 자리에 넣으면된다.
          hole[j] = item;
          isAllItemReuse = false;
          break;
        }
      }
      if (isAllItemReuse) {
        //모든아이템이 재사용된다면? -> 가장 늦게나오는애를 빼야한다.
        hole[finalPos] = item;
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
  [n, m] = input[0].split(" ").map((value) => Number(value));
  hole = Array.from({ length: n }, () => 0);
  input = input.slice(1);
  input[0].split(" ").map((value) => arr.push(Number(value)));
  solve();
});
