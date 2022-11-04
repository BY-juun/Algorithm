function getToppingNumber(arr) {
  return [...new Set(arr)].length;
}

function solution(topping) {
  var answer = 0;
  const brother = { total: 0 };
  const me = { total: 0 };

  topping.forEach((item) => {
    if (!brother[item]) {
      brother[item] = 1;
      brother.total++;
    } else brother[item]++;
  });

  for (let i = 0; i < topping.length; i++) {
    const item = topping[i];
    if (!me[item]) {
      me[item] = 1;
      me.total++;
    }
    if (brother[item] === 1) brother.total--;
    brother[item]--;
    if (me.total === brother.total) answer++;
  }

  return answer;
}
