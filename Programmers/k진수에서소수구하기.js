function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getCombination(arr) {
  const combination = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      combination.push({ start: arr[i], end: arr[j] });
    }
  }
  return combination;
}

function solution(n, k) {
  var answer = 0;
  const number = n.toString(k);
  let zeroArr = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] === "0") zeroArr.push(i);
  }
  zeroArr = [-1, ...zeroArr, number.length];
  const combination = getCombination(zeroArr);
  for (const comb of combination) {
    const { start, end } = comb;
    const sliceNum = number.slice(start + 1, end);
    if (sliceNum && !sliceNum.includes("0")) {
      if (isPrime(Number(sliceNum))) answer++;
    }
  }
  return answer;
}
