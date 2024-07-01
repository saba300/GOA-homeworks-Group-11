'''Pop:

1)Remove and print the last element of a list of integers.

2)Remove and return the first element of a list of strings.

3)Pop the element at index 2 from a list of characters.

4)Remove and return the last element of a list of tuples.

5)Handle IndexError by popping from an empty list'''


#1
numlist=[1, 2, 3, 4, 5]
print(numlist.pop())


#2
strlist=["car", "tree", "house"]
a = strlist.pop()
strlist.append(a)
print(strlist)

#3
chrlist=["a", "b", "c", "d"]
chrlist.pop(2)
print(chrlist)

#4

tuplist = ["car", "tree", "house", "book"]
a=tuplist.pop()
tuplist.append(a)
print(tuplist)


#5
emptylist=[]
if len(emptylist) > 0:
    result=emptylist.pop()
    print(result)
else:
    print("list is empty")