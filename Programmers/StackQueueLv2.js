function solution(progresses, speeds) {
  var answer = [];
  const needDay = [];
  for (let i = 0; i < progresses.length; i++) {
    needDay.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  let accDay = needDay[0];
  let count = 1;
  for (let i = 1; i < needDay.length; i++) {
    if (needDay[i] <= accDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      accDay = needDay[i];
    }
  }
  answer.push(count);
  return answer;
}
