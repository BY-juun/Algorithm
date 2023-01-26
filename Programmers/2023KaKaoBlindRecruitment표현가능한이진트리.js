let flag = 1;

function solution(numbers) {
  var answer = [];
  numbers.forEach((number) => {
    flag = 1;
    const dec = number.toString(2);
    const tree = addDummy(dec);
    treeValidation(0, tree.length - 1, tree, "1");
    answer.push(flag);
  });
  return answer;
}

function treeValidation(left, right, tree, parent) {
  if (!flag) return;
  let mid = Math.floor((left + right) / 2);
  if (tree[mid] === "1" && parent === "0") {
    flag = 0;
    return;
  }
  if (left === right) return;
  treeValidation(left, mid - 1, tree, tree[mid]);
  treeValidation(mid + 1, right, tree, tree[mid]);
}

function addDummy(dec) {
  let i = 1;
  const len = dec.length;
  while (true) {
    if (Math.pow(2, i - 1) - 1 <= len && len <= Math.pow(2, i) - 1) break;
    i++;
  }
  const targetLen = Math.pow(2, i) - 1 - len;

  return "0".repeat(targetLen) + dec;
}
