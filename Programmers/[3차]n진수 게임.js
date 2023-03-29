function solution(n, t, m, p) {
  var answer = "";
  let originNumber = 0;
  let remain = t;
  p = p - 1;
  let turn = 0;

  while (true) {
    if (remain === 0) break;
    const targetNum = originNumber.toString(n).split("");
    for (let i = 0; i < targetNum.length; i++) {
      if (remain === 0) break;
      if (turn === p) {
        answer += targetNum[i].toUpperCase();
        remain--;
      }
      turn = (turn + 1) % m;
    }
    originNumber++;
  }

  return answer;
}
