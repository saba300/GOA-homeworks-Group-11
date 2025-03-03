'''3) შექმენით ფუნქცია სახელად odd_even რომელსაც გადაეცემა რიცხვების სია, პარამეტრს დაარქვით numbers_list, 
თქვენი დავალებაა გადაუაროთ ამ რიცხვების სიას 
და დაბეჭდოთ თითოეულ რიცხვზე ლუწია თუ კენტი მაგ: "Even: 6" გამოიყენეთ for ციკლი და აგრეთვე if-else'''

def odd_even(numbers_list):
    for i in numbers_list:
        if i%2==0:
            print(str(i)+" is Even")
        elif i%2==1:
            print(str(i)+" is Odd")
sizeof_list=int(input("Enter number of members of list: "))
num_list=[]
for i in range(sizeof_list):
    ele=int(input("Enter member of list: "))
    num_list.append(ele)
odd_even(num_list)        