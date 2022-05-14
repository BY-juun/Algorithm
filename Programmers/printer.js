function solution(priorities, location) {
  var answer = 0;
  priorities = priorities.map((value, idx) => {
    return { priority: value, idx: idx };
  });

  while (true) {
    let curItem = priorities.shift();
    const isExist = priorities.findIndex((value) => value.priority > curItem.priority);
    if (isExist >= 0) priorities.push(curItem);
    else {
      answer++;
      if (curItem.idx === location) break;
    }
  }

  return answer;
}
