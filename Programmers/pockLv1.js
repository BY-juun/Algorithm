function solution(nums) {
  var answer = 0;
  let filtered = [...new Set([...nums])];
  const len = nums.length / 2;
  if (filtered.length >= len) return len;
  else return filtered.length;
}
