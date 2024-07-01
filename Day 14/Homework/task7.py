'''Len:

1)Find the length of a list of 10 random integers.

2)Determine the number of elements in a list of strings representing weekdays.

3)Calculate the length of a nested list.

4)მომხმარებელს შემოატანინეთ სტრინგი და შემდეგ Len ფუნქციის გამოყენებით დავეჭდეთ მისი სიგრძე'''

#1
int_list=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
print(len(int_list))

#2
weekend_list=["Mondey", "Tuesday", "Wednesdey", "Thursday", "Friday", "Saturday", "Sunday"]
print(len(weekend_list))

#3
nested_list=[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(len(nested_list))

#4
word = input("Enter your string: ")
print(len(word))