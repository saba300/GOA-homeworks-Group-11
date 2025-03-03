'''Count:

1)Count how many times the number 5 appears in a list of integers.

2)Count occurrences of the letter 'a' in a list of strings.

3)Count the number of True values in a list of boolean values.

4) Count occurrences of a sublist [3, 4] in a nested list.'''

#1
intlist=[3, 4, 5, 5, 6]
x= intlist.count(5)
print(x)

#2
strlist=["car", "tree", "house", "ball"]
x=0
sum=0
for i in strlist:
    x=i.count("a")
    sum=sum+x
print(sum)

#3
boollist=[True, False, False, True, True]
x = boollist.count(True)
print(x)

#4
nested_list = [[1, 2], [3, 4], [3, 4]]
sublist = [3, 4]
print(nested_list.count(sublist))


