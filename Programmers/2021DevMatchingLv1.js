function Rank(num) {
  if (num === 6) return 1;
  else if (num === 5) return 2;
  else if (num === 4) return 3;
  else if (num === 3) return 4;
  else if (num === 2) return 5;
  else if (num < 2) return 6;
}

function solution(lottos, win_nums) {
  var answer = [];
  let max = 0;
  let min = 0;
  for (let x of lottos) {
    if (win_nums.includes(x)) {
      max++;
      min++;
      win_nums = win_nums.filter((value) => value !== x);
    }
  }
  for (let x of lottos) {
    if (x === 0) {
      max++;
      win_nums.pop();
    }
  }
  answer.push(Rank(max));
  answer.push(Rank(min));
  return answer;
}
