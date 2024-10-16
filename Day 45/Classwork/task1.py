'''შევქმნათ ფუნქცია რომელიც გადმოცემული სტრინგის გაატმაგებულ ვერსიას დააბრუნებს'''


def myfunc(s):
    new_s=""
    for i in range(10):
        new_s+=s
    return new_s

print(myfunc("saba"))