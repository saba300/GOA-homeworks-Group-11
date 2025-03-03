'''გააკეთეთ 5-5 მაგალითი if-elif-else'''
a=int(input())
b=int(input())
#1
if a>b:
    print("a>>")
elif a<b:
    print("b>>")
else:
    print("==")
#2
if a > b: print("a>>")
#3
if a>b:
    print(a-b)
else:
    print(a+b)
#4
if a==b: print("a is equal b")
#5
if a<18:
    print("you aren`t adult")
else:
    print("you are adult0")