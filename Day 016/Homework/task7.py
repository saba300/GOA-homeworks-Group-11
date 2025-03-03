'''შემოგდით 2 სია და თქვენი დავალებაა ამ სიებიდან ამოიღოთ კენტები და ლუწები და განათავსოთ ისინი ორ სხვადასხვა სიაში.'''

first_list=[1, 2, 3, 4, 5]
second_list=[6, 7, 8, 9]
even_list=[]
odd_list=[]
for i in first_list:
    if i%2==0:
        even_list.append(i)
    elif i%2==1:
        odd_list.append(i)
for j in second_list:
    if j%2==0:
        even_list.append(j)
    elif j%2==1:
        odd_list.append(j)
print(even_list)
print(odd_list)

