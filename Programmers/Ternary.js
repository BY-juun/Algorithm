function solution(n) {
  var answer = 0;
  let result = "";
  while (n > 0) {
    result += String(n % 3);
    n = Math.floor(n / 3);
  }
  let count = 0;

  for (let i = result.length - 1; i >= 0; i--) {
    answer += Math.pow(3, count) * Number(result[i]);
    count++;
  }
  return answer;
}
