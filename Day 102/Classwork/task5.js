const numberMap = new Map();

numberMap.set(1, 10);
numberMap.set(2, 15);
numberMap.set(3, 20);
numberMap.set(4, 25);
numberMap.set(5, 30);

function filterEvenValues(map) {
  const evenValuesMap = new Map();
  for (let [key, value] of map) {
    if (value % 2 === 0) {
      evenValuesMap.set(key, value);
    }
  }
  return evenValuesMap;
}

const evenMap = filterEvenValues(numberMap);
console.log(evenMap);

