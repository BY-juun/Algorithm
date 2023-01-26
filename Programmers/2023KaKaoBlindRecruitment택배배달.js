function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let isAllClear = false;
  let deliveryCurIdx = n - 1;
  let pickUpCurIdx = n - 1;

  while (!isAllClear) {
    const [furthestDeliveryHouse, nextDevlieryIdx] = findFurthestHouse(deliveries, cap, deliveryCurIdx);
    const [furthestPickUpHouse, nextPickUpIdx] = findFurthestHouse(pickups, cap, pickUpCurIdx);

    answer += Math.max(furthestDeliveryHouse, furthestPickUpHouse) * 2;
    deliveryCurIdx = nextDevlieryIdx;
    pickUpCurIdx = nextPickUpIdx;

    if (deliveryCurIdx === -1 && pickUpCurIdx === -1) break;
  }

  return answer;
}

function findFurthestHouse(arr, capacity, curIdx) {
  if (curIdx === -1) return [0, -1];

  let lastIdx = -1;
  let nextIdx = -1;

  for (let i = curIdx; i >= 0; i--) {
    if (arr[i] === 0) continue;

    let box_num = Math.min(capacity, arr[i]);

    capacity -= box_num;
    arr[i] -= box_num;

    lastIdx = Math.max(lastIdx, i);
    if (capacity === 0) {
      nextIdx = i;
      break;
    }
  }
  return [lastIdx + 1, nextIdx];
}
