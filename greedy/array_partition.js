/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let answer = 0;
  nums.sort((a, b) => b - a);

  for (let i = 1; i < nums.length; i += 2) {
    answer += nums[i];
  }

  return answer;
};
