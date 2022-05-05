function getDivisor(num) {
  if (num === 1) return 1;
  let result = 0;
  for (let i = 2; i <= Math.ceil(num / 2); i++) {
    if (num % i === 0) result++;
  }
  return result + 2;
}

function solution(left, right) {
  var answer = 0;
  for (let cur = left; cur <= right; cur++) {
    const Divisor = getDivisor(cur);
    answer = Divisor % 2 === 0 ? answer + cur : answer - cur;
  }
  return answer;
}
