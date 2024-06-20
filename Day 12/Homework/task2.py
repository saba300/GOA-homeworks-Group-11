'''გააკეთეთ 5-5 მაგალითი while ციკლებზე'''
#1
i=1
while i<=5:
    print(i)
    i=i+1
#2
i=1
sum=0
while i<=5:
    sum=sum+i
    i=i+1
print(sum)
#3
i=1
numr=1
while i<=5:
    numr=numr*i
    i=i+1
print(numr)
#4
i=1
while i<=5:
    if i>3:
        break
    print(i)
    i=i+1
#5
i = 0
while i < 6:
    i=i+1
    if i == 3:
        continue
    print(i)