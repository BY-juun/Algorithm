const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;

    mid = Math.floor((left + right) / 2);
  }
  // 기준이 되는 인덱스는, 여기서 나온 값보다 항상 1이 더 큽니다. 따라서 +1을 해주죠!
  return mid + 1;
};

const getResult = (query, info, score) => {
  const infoKeys = Object.keys(info);
  return infoKeys.filter((k) => query.every((q) => k.includes(q))).reduce((acc, cur) => acc + info[cur].length - binarySearch(info[cur], score), 0);
};

const MakeInfoObject = (infos) => {
  const infoObject = {};
  infos.forEach((info) => {
    const infoArr = info.split(" ");
    const score = Number(infoArr.pop());
    const infoStr = infoArr.join("");
    if (infoObject[infoStr]) infoObject[infoStr].push(score);
    else infoObject[infoStr] = [score];
  });
  for (const key in infoObject) {
    infoObject[key].sort((a, b) => a - b);
  }
  return infoObject;
};

function solution(info, query) {
  var answer = [];
  const infos = MakeInfoObject(info);
  query
    .map((q) => {
      return q.split(/ and | |-/i).filter((v) => v !== "");
    })
    .forEach((q) => {
      const score = q.pop();
      answer.push(getResult(q, infos, score));
    });
  return answer;
}
