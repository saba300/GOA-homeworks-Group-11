//შევქმნათ ფუნქცია რომელიც გადმოცემული სტრინგის გაატმაგებულ ვერსიას დააბრუნებს

function myfunc(s){
    let new_s=""
    for(let i=1; i<=10; i++){
        new_s+=s
    }
    return new_s
}

console.log(myfunc("saba"))