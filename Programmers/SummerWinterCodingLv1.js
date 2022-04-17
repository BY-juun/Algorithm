let answer = 0;

function isPrime(num) {
  if (num === 0 || num === 1) return;
  for (let i = 2; i < Math.ceil(num / 2); i++) {
    if (num % i === 0) return;
  }
  answer++;
}

function Combination(nums, curIdx, picked) {
  if (curIdx > nums.length) return;
  if (picked.length === 3) {
    isPrime(picked.reduce((acc, cur) => acc + cur, 0));
    return;
  }
  Combination(nums, curIdx + 1, [...picked]);
  Combination(nums, curIdx + 1, [...picked, nums[curIdx]]);
}

function solution(nums) {
  Combination(nums, 0, []);
  return answer;
}
