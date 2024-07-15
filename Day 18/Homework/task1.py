'''შექმენთ person ცვლადი dictionary-ს
'name': 
'age': 
'city': 
'work':

საბოლოოდ კი დაპრინტეთ ლამაზად
გამოტოვებულ ადგილას შეავსეთ {} და გამოიყენეთ dictionary-ის ინფორმაცია
(f" is   years old and works as an   in   .")
'''
person = {
    "name":"Saba",
    "age":16,
    "city":"Tbilisi",
    "work":"programmer"
}
name=person["name"]
age=person["age"]
city=person["city"]
work=person["work"]

print(f"{name} is {age} years old and works as a {work} in {city}")