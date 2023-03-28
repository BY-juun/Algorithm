function solution(fees, records) {
  var answer = [];

  const [defaultMinute, defaultPrice, unitMinute, unitPrice] = fees;

  const recordMap = new Map();
  const accTime = new Map();

  const convertToMinute = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
  };

  const addCarToMap = (time, carNum) => recordMap.set(carNum, time);

  const removeCarFromMap = (time, carNum) => {
    const timeGap = time - recordMap.get(carNum);
    if (accTime.has(carNum)) accTime.set(carNum, accTime.get(carNum) + timeGap);
    else accTime.set(carNum, timeGap);
    recordMap.delete(carNum);
  };

  const calculatePrice = (minute) =>
    minute <= defaultMinute
      ? defaultPrice
      : defaultPrice + Math.ceil((minute - defaultMinute) / unitMinute) * unitPrice;

  records.forEach((record) => {
    const [time, carNum, type] = record.split(" ");
    const fn = type === "IN" ? addCarToMap : removeCarFromMap;
    fn(convertToMinute(time), carNum);
  });

  [...recordMap.keys()].forEach((key) => removeCarFromMap(23 * 60 + 59, key));

  [...accTime.keys()]
    .sort((a, b) => a - b)
    .forEach((key) => {
      answer.push(calculatePrice(accTime.get(key)));
    });

  return answer;
}

solution(
  [180, 5000, 10, 600],
  [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
  ]
);
