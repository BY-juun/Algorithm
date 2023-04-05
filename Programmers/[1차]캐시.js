function solution(cacheSize, cities) {
  const cache = [];
  let answer = 0;

  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((city) => {
    const idx = cache.indexOf(city.toLowerCase());
    if (idx !== -1) {
      answer += 1;
      cache.unshift(...cache.splice(idx, 1));
    } else {
      answer += 5;
      if (cache.length === cacheSize) cache.pop();
      cache.unshift(city.toLowerCase());
    }
  });

  return answer;
}
