function sorting(a, b) {
  const compareA = Number(String(a) + String(b));
  const compareB = Number(String(b) + String(a));
  return compareB - compareA;
}

function solution(numbers) {
  let answer;
  numbers.sort(sorting);
  answer = numbers.join("");
  if (numbers[0] === 0) return "0";
  return answer;
}
