const discountRates = [10, 20, 30, 40];

function solution(users, emoticons) {
  let answer = null;

  const compareAnswer = (candidate) => {
    if (!answer) return (answer = candidate);

    if (answer[0] > candidate[0]) return;
    else if (answer[0] < candidate[0]) answer = candidate;
    else {
      answer = answer[1] > candidate[1] ? answer : candidate;
    }
  };

  const do_simulate = (candidate) => {
    const result = [0, 0];
    users.forEach((user) => {
      let userTotalPrice = 0;
      const [limitDiscount, limitSubscribePrice] = user;

      candidate.forEach(({ price, discountRate }) => {
        if (discountRate >= limitDiscount) userTotalPrice += price;
      });

      if (userTotalPrice >= limitSubscribePrice) result[0]++;
      else result[1] += userTotalPrice;
    });
    compareAnswer(result);
  };

  const recursive = (curIdx, accArr) => {
    if (curIdx === emoticons.length) return do_simulate(accArr);

    discountRates.forEach((discountRate) => {
      const price = Math.floor((emoticons[curIdx] * (100 - discountRate)) / 100);
      recursive(curIdx + 1, [...accArr, { price, discountRate }]);
    });
  };

  recursive(0, []);

  return answer;
}
