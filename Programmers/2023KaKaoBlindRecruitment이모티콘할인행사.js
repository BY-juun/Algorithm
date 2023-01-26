const AllEmoticonCase = [];
const discountRate = [10, 20, 30, 40];

function solution(users, emoticons) {
  findAllEmoticonsCase(0, emoticons, []);
  const answer = findAnswer(users);
  return answer;
}

function findAllEmoticonsCase(curIdx, emoticons, accEmoticons) {
  if (curIdx === emoticons.length) {
    AllEmoticonCase.push(accEmoticons);
    return;
  }
  discountRate.forEach((rate) => {
    findAllEmoticonsCase(curIdx + 1, emoticons, [...accEmoticons, { price: emoticons[curIdx], rate }]);
  });
}

function findAnswer(users) {
  let answer = [0, 0];
  AllEmoticonCase.forEach((emoticonCase) => {
    const result = [0, 0];
    users.forEach((user) => {
      let accPrice = 0;
      const [userLimitRate, userLimitSubscribePrice] = user.map(Number);

      emoticonCase.forEach((emoticon) => {
        const { rate, price } = emoticon;
        if (rate >= userLimitRate) accPrice += (price / 100) * (100 - rate);
      });

      if (accPrice >= userLimitSubscribePrice) {
        result[0]++;
        accPrice = 0;
      }

      result[1] += accPrice;
    });

    answer = compareGoal(answer, result);
  });
  return answer;
}

function compareGoal(a, b) {
  if (a[0] > b[0]) return a;
  if (a[0] < b[0]) return b;

  if (a[1] > b[1]) return a;
  return b;
}
