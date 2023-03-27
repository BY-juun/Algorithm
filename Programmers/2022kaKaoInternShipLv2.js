const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
const isInteger = (num) => (Math.floor(num) !== num ? false : true);
const isOrigin = (leftIdx, leftOriginIdx, halfIdx, halfOriginIdx) =>
  leftIdx === leftOriginIdx && halfIdx === halfOriginIdx;

function solution(queue1, queue2) {
  var answer = 0;
  const queueLength = queue1.length;
  let leftSum = sum(queue1);
  let rightSum = sum(queue2);
  const goal = (leftSum + rightSum) / 2;
  const totalQueue = [...queue1, ...queue2];

  let leftIdx = 0;
  let middleIdx = queueLength - 1;

  let leftOriginIdx = leftIdx;
  let middleOriginIdx = middleIdx;

  if (!isInteger(goal)) return -1;

  while (true) {
    if (leftSum === goal) return answer;

    if (leftSum < goal) {
      middleIdx = (middleIdx + 1) % totalQueue.length;
      leftSum += totalQueue[middleIdx];
    } else {
      leftSum -= totalQueue[leftIdx];
      leftIdx = (leftIdx + 1) % totalQueue.length;
    }

    if (leftIdx === leftOriginIdx && middleIdx === middleOriginIdx) return -1;

    if (leftIdx > middleIdx) return -1;

    answer++;
  }

  return answer;
}
