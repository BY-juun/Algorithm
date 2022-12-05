function getDist(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

function solution(k, d) {
  var answer = 0;

  for (let x = 0; x <= d; x += k) {
    const limitY = Math.floor(Math.sqrt((d * d - x * x) / (k * k)));
    answer += limitY + 1;
  }
  return answer;
}
