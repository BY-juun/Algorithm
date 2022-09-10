function solution(n, s) {
  var answer = [];
  if (n > s) return [-1];
  answer = Array.from({ length: n }, () => Math.floor(s / n));
  for (let i = 0; i < s % n; i++) {
    answer[answer.length - 1 - i]++;
  }
  return answer;
}
