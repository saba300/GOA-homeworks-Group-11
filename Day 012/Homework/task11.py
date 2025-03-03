'''შექმენით კალკულატორი, სადაც მომხმარებელი აირჩევს შემდეგ ოპერაციებს: + - * / და მის მიერ შემოტანილი ორი რიცხვით მიიღებს პასუხს.'''
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
symb = input("Choose operation: ")
if symb=="+":
    print(num1+num2)
elif symb=="-":
    print(num1-num2)
elif symb=="*":
    print(num1*num2)
elif symb=="/":
    print(num1/num2)