class User {
  referral;
  benifit;
  constructor(referral) {
    this.referral = referral;
    this.benifit = 0;
  }
}

const isInteger = (num) => Math.floor(num) === num;
const isReferralExist = (user) => (user.referral ? true : false);

function solution(enroll, referral, seller, amount) {
  const userMap = new Map();
  const root = makeUser("root", null);

  makeLink();
  doCalculate();
  return [...userMap.values()].map((v) => v.benifit).slice(1);

  function doCalculate() {
    for (let idx = 0; idx < seller.length; idx++) {
      let price = amount[idx] * 100;
      let curUser = userMap.get(seller[idx]);

      while (true) {
        let remainPrice = Math.floor(price / 10);
        if (remainPrice < 1 || !isReferralExist(curUser)) {
          curUser.benifit += price;
          break;
        }
        curUser.benifit += price - remainPrice;
        price = remainPrice;
        curUser = curUser.referral;
      }
    }
  }

  function makeLink() {
    for (let idx = 0; idx < enroll.length; idx++)
      makeUser(enroll[idx], referral[idx] === "-" ? root : userMap.get(referral[idx]));
  }

  function makeUser(enroll, referral) {
    const user = new User(referral);
    userMap.set(enroll, user);
    return user;
  }
}
