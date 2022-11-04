function solution(order) {
  var answer = 0;
  const sub = [];
  let box = 1;

  while (true) {
    if (order.length === answer) break;
    if (order[answer] === box) {
      answer++;
      box++;
    } else if (sub[sub.length - 1] === order[answer]) {
      answer++;
      sub.pop();
    } else if (sub[sub.length - 1] !== order[answer]) {
      if (order[answer] < sub[sub.length - 1]) break;
      sub.push(box);
      box++;
    }
  }

  return answer;
}
