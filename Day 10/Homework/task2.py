''' გაიარეთ for ციკლი და გააკეთეთ 5 მაგალითი for ციკლებზე'''

fruits = ["apple", "banana", "pear"]

#1
for i in "saba":
    print(i)

#2
for i in fruits:
    print(i)

#3
for i in range(5,12):
    print(i)

#4
for i in fruits:
    print(i)
    if i =="banana":
        break

#5
for i in fruits:
    if i =="banana":
        continue
    print(i)