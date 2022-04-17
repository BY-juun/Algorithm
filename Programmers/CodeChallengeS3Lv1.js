function solution(numbers) {
  var answer = 0;
  let NumberCheck = Array.from({ length: 10 }, () => true);
  for (let x of numbers) {
    NumberCheck[x] = false;
  }
  for (let i = 0; i < NumberCheck.length; i++) {
    if (NumberCheck[i]) {
      answer += i;
    }
  }
  return answer;
}
