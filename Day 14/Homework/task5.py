'''Min:

1)Find the smallest number in a list of integers.

2)Find the shortest word in a list of strings.

3)Find the lowest temperature in a list of daily temperatures.

4)Find the minimum price in a list of products.'''

#1
int_list=[1, 2, 3, 4, 5]
minnum=min(int_list)
print(minnum)

#2
word = " "
strlist = ["car", "tree", "house"]
lenlist = []
for i in strlist:
    lenlist.append(len(i))
x= min(lenlist)
for i in strlist:
    if len(i)==x:
        word=i
    else:
        continue
print(word)

#3
temp_list=[20, 24, 30, 40]
print(min(temp_list))

#4
product_list=[1, 2, 3, 4, 5]
print(min(product_list))