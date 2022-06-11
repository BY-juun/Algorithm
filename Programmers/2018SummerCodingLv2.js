function solution(N, road, K) {
  var answer = 0;
  const arr = Array.from({ length: N + 1 }, () => Infinity);
  const lines = Array.from({ length: N + 1 }, () => []);

  road.forEach((r) => {
    const [a, b, length] = r;
    lines[a].push({ to: b, cost: length });
    lines[b].push({ to: a, cost: length });
  });

  let queue = [{ to: 1, cost: 0 }];
  arr[1] = 0;

  while (queue.length !== 0) {
    const { to } = queue.shift();
    lines[to].forEach((next) => {
      if (arr[next.to] > arr[to] + next.cost) {
        arr[next.to] = arr[to] + next.cost;
        queue.push(next);
      }
    });
  }

  return arr.filter((item) => item <= K).length;
}
