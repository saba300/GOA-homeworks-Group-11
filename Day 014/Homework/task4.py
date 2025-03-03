'''Max:

1)Find the maximum number in a list of integers.

2)Find the maximum string length in a list of strings.

3)Find the oldest person's age in a list of ages.

4)Find the most recent date in a list of datetime objects'''

#1
intlist = [1, 2, 3, 4, 5]
x = max(intlist)
print(x)

#2
strlist = ["car", "tree", "house"]
lenlist = []
for i in strlist:
    lenlist.append(len(i))
x= max(lenlist)
print(x)

#3
age_list = [16, 7, 13, 36, 41]
oldest = max(age_list)
print(oldest)

#4
datetime_list=[23.03, 20.06, 05.03, 18.01, 23.03]
