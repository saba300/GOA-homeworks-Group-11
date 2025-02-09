const ageMap = new Map();

ageMap.set("Alice", 25);
ageMap.set("Bob", 30);
ageMap.set("Charlie", 35);

function checkNameInMap(name) {
  if (ageMap.has(name)) {
    console.log(`${name} is in the map with age ${ageMap.get(name)}`);
  } else {
    console.log(`${name} is not in the map.`);
  }
}

checkNameInMap("Alice");
checkNameInMap("David");
