//2) შექმენით მასივი სადაც გექნებათ მინიმუმ 5 სახელი, 
// გამოიყენეთ map მეთოდი და შეამოწმეთ შემდეგი პირობა, 
// თუ ინდექსი არის ლუწი მაშინ ახალ მასივში სახელი დაამატეთ დიდი ასოებით
//  სხვა შემთხვევაში თუ კენტია დაამატეთ პატარა ასოებით, 
// როცა ამას დაასრულებთ შექმენით  map მეთოდის კლონი და 
// გააკეთეთ იგივე დავალება თვენი კლონით, 
// აუცილებალდ ახსენით რა განსხვავებაა forEach სა და map მეთოდს შორის

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];

const transformedNames = names.map((name, index) => {
    if (index % 2 === 0) {
        return name.toUpperCase();
    } else {
        return name.toLowerCase();
    }
});

console.log(transformedNames); 