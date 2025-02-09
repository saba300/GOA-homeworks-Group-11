const student = {
    name: "Alice",
    age: 22,
    address: {
        city: "Paris",
        country: "France"
    }
};

const { address: { city, country } } = student;

console.log(city);
console.log(country);
