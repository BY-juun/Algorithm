function solution(elements) {
  const answer = [];
  for (let i = 1; i <= elements.length; i++) {
    const temp = [...elements].concat(elements.slice(0, i - 1));
    for (let j = i; j <= elements.length + i - 1; j++) {
      const end = j;
      const start = j - i;
      answer.push(temp.slice(start, end).reduce((acc, cur) => acc + cur, 0));
    }
  }
  return [...new Set(answer)].length;
}
