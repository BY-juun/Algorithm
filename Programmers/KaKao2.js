let target;
let check = false;
let answer = BigInt(Number.MAX_SAFE_INTEGER);
let isVisited;

function isSumEqual(queue1, queue2) {
  const queueOneSum = queue1.reduce((acc, cur) => acc + cur, 0);
  const queueTwoSum = queue2.reduce((acc, cur) => acc + cur, 0);
  return queueOneSum === queueTwoSum ? true : false;
}

function getSum(queue) {
  return queue.reduce((acc, cur) => acc + cur, 0);
}

function recursive(count, queue1, queue2) {
  if (isSumEqual(queue1, queue2)) {
    if (count < answer) {
      answer = BigInt(count);
      check = true;
    }
    return;
  }
  let tempQueue1;
  let tempQueue2;
  if (queue1.length !== 0) {
    tempQueue1 = [...queue1];
    tempQueue2 = [...queue2];
    tempQueue2.push(tempQueue1.shift());
    if (!isVisited[getSum(tempQueue1)].visited || BigInt(BigInt(count) + BigInt(1)) < isVisited[getSum(tempQueue1)].count) {
      isVisited[getSum(tempQueue1)].visited = true;
      isVisited[getSum(tempQueue1)].count = BigInt(BigInt(count) + BigInt(1));

      isVisited[getSum(tempQueue2)].visited = true;
      isVisited[getSum(tempQueue2)].count = BigInt(BigInt(count) + BigInt(1));

      recursive(BigInt(BigInt(count) + BigInt(1)), tempQueue1, tempQueue2);
    }
  }
  if (queue2.length !== 0) {
    tempQueue1 = [...queue1];
    tempQueue2 = [...queue2];
    tempQueue1.push(tempQueue2.shift());
    if (!isVisited[getSum(tempQueue1)].visited || BigInt(BigInt(count) + BigInt(1)) < isVisited[getSum(tempQueue1)].count) {
      isVisited[getSum(tempQueue1)].visited = true;
      isVisited[getSum(tempQueue1)].count = BigInt(BigInt(count) + BigInt(1));

      isVisited[getSum(tempQueue2)].visited = true;
      isVisited[getSum(tempQueue2)].count = BigInt(BigInt(count) + BigInt(1));

      recursive(BigInt(BigInt(count) + BigInt(1)), tempQueue1, tempQueue2);
    }
  }
}

function isSolve(queue1, queue2) {
  if (queue1.findIndex((value) => value > target) >= 0) {
    answer = -1;
    return false;
  }
  if (queue2.findIndex((value) => value > target) >= 0) {
    answer = -1;
    return false;
  }

  return true;
}

function solution(queue1, queue2) {
  let queue1Sum = queue1.reduce((acc, cur) => acc + cur, 0);
  let queue2Sum = queue2.reduce((acc, cur) => acc + cur, 0);
  target = queue1Sum + queue2Sum;
  isVisited = Array.from({ length: target + 1 }, () => {
    return { count: BigInt(0), visited: false };
  });
  isVisited[queue1Sum].visited = true;
  isVisited[queue2Sum].visited = true;
  target = Math.floor(target / 2);
  recursive(0, queue1, queue2);
  if (check) {
    console.log(answer);
    return answer;
  } else {
    console.log(-1);
    return -1;
  }
}

solution([3, 2, 7, 2], [4, 6, 5, 1]);
