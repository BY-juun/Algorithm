const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
const isInteger = (num) => (Math.floor(num) !== num ? false : true);
const isOrigin = (leftIdx, leftOriginIdx, halfIdx, halfOriginIdx) => leftIdx === leftOriginIdx && halfIdx === halfOriginIdx;

function solution(queue1, queue2) {
  var answer = 0;
  const queue = [...queue1, ...queue2];
  const halfSum = sum(queue) / 2;

  if (!isInteger(halfSum)) return -1;

  const length = queue.length;

  const leftOriginIdx = 0;
  const halfOriginIdx = queue1.length - 1;

  let leftIdx = 0;
  let halfIdx = queue1.length - 1;

  let leftSum = sum(queue1);

  while (true) {
    if (leftSum === halfSum) break;
    else if (leftSum < halfSum) {
      halfIdx = (halfIdx + 1) % length;
      leftSum += queue[halfIdx];
    } else {
      leftSum -= queue[leftIdx];
      leftIdx = (leftIdx + 1) % length;
    }

    if (isOrigin(leftIdx, leftOriginIdx, halfIdx, halfOriginIdx)) return -1;
    if (leftIdx > halfIdx) return -1;
    answer++;
  }

  return answer;
}
