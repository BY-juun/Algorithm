function CopyArray(origin) {
  const returnArray = [];
  for (const row of origin) {
    const temp = [...row];
    returnArray.push(temp);
  }
  return returnArray;
}

function isValid(lock) {
  const originalLength = Math.floor(lock.length / 3);
  for (let i = 0; i < originalLength; i++) {
    for (let j = 0; j < originalLength; j++) {
      if (lock[i + originalLength][j + originalLength] === 0) return false;
    }
  }
  return true;
}

function rotate(key) {
  const newKey = Array.from({ length: key.length }, () => Array.from({ length: key.length }, () => 0));
  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      newKey[i][j] = key[newKey.length - 1 - j][i];
    }
  }
  return newKey;
}

function doAllCase(key, lock) {
  for (let i = 0; i < lock.length - key.length + 1; i++) {
    for (let j = 0; j < lock.length - key.length + 1; j++) {
      let tempLock = CopyArray(lock);
      let check = true;
      for (let k = 0; k < key.length; k++) {
        if (!check) break;
        for (let p = 0; p < key.length; p++) {
          if (!check) break;
          if (tempLock[i + k][j + p] && key[k][p]) {
            check = true;
            break;
          }
          if (!tempLock[i + k][j + p] && key[k][p]) {
            tempLock[i + k][j + p] = key[k][p];
          }
        }
      }
      if (check) {
        if (isValid(tempLock)) return true;
      }
    }
  }
  return false;
}

function solution(key, lock) {
  let OrignalLockLength = lock.length;
  let bigLock = Array.from({ length: OrignalLockLength * 3 }, () => Array.from({ length: OrignalLockLength * 3 }, () => 0));

  //initialize
  for (let i = 0; i < OrignalLockLength; i++) {
    for (let j = 0; j < OrignalLockLength; j++) {
      bigLock[i + OrignalLockLength][j + OrignalLockLength] = lock[i][j];
    }
  }

  for (let i = 0; i < 4; i++) {
    if (doAllCase(key, bigLock)) return true;
    key = rotate(key);
  }
  return false;
}
