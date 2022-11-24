function solution(k, tangerine) {
  let deleteCount = tangerine.length - k;

  const counts = {};
  const countArr = [];

  for (const value of tangerine) {
    if (counts[value]) counts[value]++;
    else counts[value] = 1;
  }

  Object.keys(counts).forEach((key) => {
    countArr.push({ kind: key, length: counts[key] });
  });

  countArr.sort((a, b) => a.length - b.length);

  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i].length > deleteCount) break;
    deleteCount -= countArr[i].length;
    countArr[i] = null;
  }

  return countArr.filter((v) => v !== null).length;
}
