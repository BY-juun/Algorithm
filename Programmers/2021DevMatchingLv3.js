function solution(enroll, referral, seller, amount) {
  var answer = [];
  const user = {};
  user["center"] = { referral: null, amount: 0 };
  for (let i = 0; i < enroll.length; i++) {
    user[enroll[i]] = { referral: referral[i] !== "-" ? referral[i] : "center", amount: 0 };
  }

  for (let i = 0; i < seller.length; i++) {
    let curUser = user[seller[i]];
    let curAmount = amount[i] * 100;
    while (curUser.referral !== null) {
      if (Math.floor(curAmount / 10) === 0) {
        curUser.amount += curAmount;
        break;
      } else {
        curUser.amount += curAmount - Math.floor(curAmount / 10);
        curAmount = Math.floor(curAmount / 10);
        curUser = user[curUser.referral];
      }
    }
  }
  for (const User in user) {
    answer.push(user[User].amount);
  }
  answer.shift();
  return answer;
}
