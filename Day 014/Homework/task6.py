'''Sum:

1)Calculate the sum of all numbers in a list of integers.

2)Calculate the total length of strings in a list of strings.

3)Calculate the total score of a team in a list of game results.

4)Sum the elements of nested lists to get a flattened sum.'''

#1
int_list=[1, 2, 3, 4, 5]
print(sum(int_list))

#2
strlist = ["car", "tree", "house"]
lenlist = []
for i in strlist:
    lenlist.append(len(i))
print(sum(lenlist))

#3
game_results=[1, -2, 3, 4, 5]
print(sum(game_results))

#4
total = 0
nested_list=[[2, 3], [4, 5, 6], [7, 8, 9]]
for i in nested_list:
    total=total+sum(i)
print(total)
