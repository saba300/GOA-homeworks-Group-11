'''შექმენით ისეთი პროგრამა რომელიც for ციკლის დახმარებით მომხმარებელს შემოატანინებს 5 ჯერ 
თავისი საყვარელი მანქანის სახელს ხოლო თითოეულ შემოტანილს დაამატებთ სიაში append მეთოდის გამოყენებით'''

fav_cars=[]

for i in range(5):
    fav_car=input("What is your favourite car? ")
    fav_cars.append(fav_car)
print(fav_cars)