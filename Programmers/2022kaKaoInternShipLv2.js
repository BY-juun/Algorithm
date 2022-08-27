const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

function solution(queue1, queue2) {
  var answer = -1;
  const TOTAL_ARRAY = [...queue1, ...queue2];
  const MAX_COUNT = TOTAL_ARRAY.length * 4;
  const TARGET = sum(TOTAL_ARRAY) / 2;
  let start = 0;
  let end = queue1.length;
  let count = 0;
  let queue1Sum = sum(TOTAL_ARRAY.slice(start, end));
  while (count <= MAX_COUNT && start <= end) {
    if (queue1Sum === TARGET) return count;
    else if (queue1Sum < TARGET) {
      queue1Sum += TOTAL_ARRAY[end];
      end++;
    } else if (queue1Sum > TARGET) {
      queue1Sum -= TOTAL_ARRAY[start];
      start++;
    }
    count++;
  }

  return answer;
}
