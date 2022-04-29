let totalObject = {};

function combination(str, curIdx, curStr, targetLength) {
  if (curIdx > str.length) return;
  if (curStr.length === targetLength) {
    curStr = curStr
      .split("")
      .sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
      })
      .join("");

    if (totalObject[curStr] !== undefined) totalObject[curStr]++;
    else totalObject[curStr] = 0;
  } else {
    combination(str, curIdx + 1, curStr + str[curIdx], targetLength);
    combination(str, curIdx + 1, curStr, targetLength);
  }
}

function solution(orders, course) {
  var answer = [];
  var courseObj = {};
  for (let order of orders) {
    for (let x of course) {
      if (Number(x) <= order.length) combination(order, 0, "", x);
      courseObj[x] = 0;
    }
  }
  const keys = Object.keys(totalObject);
  for (let key of keys) {
    const len = key.length;
    if (courseObj[len] < totalObject[key]) courseObj[len] = totalObject[key];
  }
  for (let key of keys) {
    const len = key.length;
    if (courseObj[len] === totalObject[key]) {
      if (totalObject[key] >= 1) answer.push(key);
    }
  }

  answer.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
  });

  return answer;
}
