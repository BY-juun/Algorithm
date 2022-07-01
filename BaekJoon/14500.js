const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", async function () {
  // 답안 작성
  let answer = "";
  answer = tetro(input);
  console.log(answer);
  process.exit();
});

let tetro = function (input) {
  let tetromino = [];
  let tmp = input.splice(0, 1).join("").split(" ");
  let N = tmp[0] * 1;
  let M = tmp[1] * 1;
  //위,아래 여백용 알파 배열
  let alpha = new Array(M + 4).fill(0);
  tetromino.push(alpha);
  input.reduce((acc, cur) => {
    //좌, 우에도 필요한 만큼 여백을 넣어준다
    tetromino.push(("0 " + cur + " 0 0 0").split(" "));
  }, "");
  tetromino.push(alpha);
  tetromino.push(alpha);
  tetromino.push(alpha);
  return tetro_max(tetromino, N, M);
};

let tetro_max = function (t, N, M) {
  let result = 0;
  //console.log(t)
  for (i = 1; i <= N; i++) {
    for (j = 1; j <= M; j++) {
      //현재까지의 max값과 그 외 19가지 테트로미노 경우의 수들 중 MAX를 구한다.
      result = Math.max(
        result,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 2][j] * 1 + t[i + 3][j] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i][j + 2] * 1 + t[i][j + 3] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i][j + 1] * 1 + t[i + 1][j + 1] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 2][j] * 1 + t[i + 2][j + 1] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i][j + 1] * 1 + t[i][j + 2] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 1][j + 1] * 1 + t[i + 1][j + 2] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 2][j] * 1 + t[i + 2][j - 1] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i + 1][j + 1] * 1 + t[i + 2][j + 1] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i][j + 2] * 1 + t[i - 1][j + 2] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i][j + 2] * 1 + t[i + 1][j + 2] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i + 1][j] * 1 + t[i + 2][j] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 1][j + 1] * 1 + t[i + 2][j + 1] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i - 1][j + 1] * 1 + t[i - 1][j + 2] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 1][j - 1] * 1 + t[i + 2][j - 1] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i + 1][j + 1] * 1 + t[i + 1][j + 2] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i - 1][j + 1] * 1 + t[i][j + 2] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 1][j + 1] * 1 + t[i + 2][j] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i][j + 2] * 1 + t[i + 1][j + 1] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 1][j - 1] * 1 + t[i + 2][j] * 1
      );
    }
  }
  return result;
};
