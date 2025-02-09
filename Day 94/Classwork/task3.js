const people = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 16 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 17 },
    { name: 'Eva', age: 19 }
];
  
const adults = people.filter(person => person.age >= 18);
const minors = people.filter(person => person.age < 18);
  
console.log(adults);  
console.log(minors); 
  