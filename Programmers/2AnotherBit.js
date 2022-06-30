function DecToBin(num) {
  let bin = "";
  while (num > 0) {
    bin += String(num % 2);
    num = Math.floor(num / 2);
  }
  bin = bin.split("").reverse().join("");
  return Number(bin);
}

function CheckFx(num1, num2) {
  let count = 0;
  while (true) {
    if (num1 === 0 && num2 === 0) break;
    if (num1 % 10 !== num2 % 10) count++;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
  }
  if (count === 1 || count === 2) return true;
  else return false;
}

function solution(numbers) {
  var answer = [];
  numbers.forEach((v) => {
    let num = v + 1;
    while (true) {
      if (CheckFx(DecToBin(v), DecToBin(num))) {
        answer.push(num);
        break;
      }
      num++;
    }
  });
  return answer;
}

console.log(solution([3]));
