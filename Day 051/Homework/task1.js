//1) შევქმნათ ჯავასკრიპტის ფუნქცია რომეკსაც გადაეცემა მასივი და 
//აბრუნებს მასივს ორი ელემენტით, პირველი 
//ელემენტი არის უდიდესი რიცხვი გადაცემული მასივიდან, ხოლო მეორე უმცირესი.

function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return [max, min];
}


console.log(findMaxMin([1, 2, 3, 4, 5])); 
