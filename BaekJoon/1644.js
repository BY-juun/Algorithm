function isPrime(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(Number(input[0]));
});

function solution(num) {
  const primes = [];

  for (let i = 2; i <= num; i++) {
    isPrime(i) && primes.push(i);
  }

  if (primes.length === 1) {
    num === primes[0] ? console.log(1) : console.log(0);
    return;
  }

  let left = 0;
  let right = 1;
  let sum = primes[left] + primes[right];
  let answer = 0;

  while (left <= right && right < primes.length) {
    if (sum === num) {
      answer++;
      sum -= primes[left];
      left++;
    } else if (sum > num) {
      sum -= primes[left];
      left++;
    } else {
      right++;
      sum += primes[right];
    }
  }

  console.log(answer);
}
