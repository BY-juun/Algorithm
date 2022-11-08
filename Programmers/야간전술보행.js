function solution(distance, scope, times) {
  var answer = 0;
  const timesObject = {};
  scope.forEach((value, index) => {
    value.sort((a, b) => a - b);
    timesObject[String(value)] = times[index];
  });

  scope.sort((a, b) => a[0] - b[0]);
  for (const value of scope) {
    const [start, end] = value;
    const [workTime, restTime] = timesObject[String(value)];
    for (let curTime = start; curTime <= end; curTime++) {
      const curStatus = curTime % (workTime + restTime);
      if (curStatus !== 0 && curStatus <= workTime) return curTime;
    }
  }

  return distance;
}
