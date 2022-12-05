function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  let front = 0;
  while (true) {
    if (people.length - 1 < front) break;
    const last = people.length - 1;
    if (people[front] + people[last] <= limit) {
      people.pop();
      front++;
      answer++;
    } else {
      people.pop();
      answer++;
    }
  }
  return answer;
}
