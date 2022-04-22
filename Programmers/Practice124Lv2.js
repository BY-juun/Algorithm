function solution(n) {
  var answer = "";
  while (n > 0) {
    const remain = n % 3;
    if (remain === 0) {
      answer += "4";
      n -= 1;
    } else if (remain === 1) answer += "1";
    else if (remain === 2) answer += "2";
    n = Math.floor(n / 3);
  }

  return answer.split("").reverse().join("");
}
