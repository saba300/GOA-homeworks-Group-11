const objectMap = new Map();

const object1 = { id: 1, name: "Alice" };
const object2 = { id: 2, name: "Bob" };
const object3 = { id: 3, name: "Charlie" };

objectMap.set(object1.id, object1);
objectMap.set(object2.id, object2);
objectMap.set(object3.id, object3);

console.log(objectMap);
