function solution(d, budget) {
  var answer = 0;

  d.sort((a, b) => a - b);

  for (let x of d) {
    if (x <= budget) {
      answer++;
      budget -= x;
    } else {
      break;
    }
  }

  return answer;
}
