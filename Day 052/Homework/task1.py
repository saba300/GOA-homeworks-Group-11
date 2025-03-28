'''დაწერეთ count_area ფუნქცია რომელსაც შეეძლება გამოთვალოს ფიგურის 
ფართობი მართკუთხედისთვის(ინფუთი იქნება 2 რიცხვი) ,  წრისთვის 
(ინფუთი იქნება 1 მთელი რიცხვი ) და სამკუთხედისთვის (ინფუთი იქნება 3 მთელი რიცხვი)'''

import math

def getArea(a, b=None, c=None):
    if not b:
        print("circle")
        return math.pi * a * a
    elif not c:
        print("rectangle")
        return a * b
    print("triangle")
    s = ( a + b + c) / 2
    return math.sqrt(s(s -a)(s-b)*(s-c))

getArea(10)
getArea(10, 90)
getArea(4,5,6)