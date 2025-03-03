'''შემოგდით 2 სია და თქვენი დავალებაა ამ ორი სიიდან ამოიღოთ კენტები და ლუწები და დაპრინტოთ მათი ჯამი ცალ-ცალკე.'''

first_list=[1, 2, 3, 4, 5]
second_list=[6, 7, 8, 9]
even_sum=0
odd_sum=0
for i in first_list:
    if i%2==0:
        even_sum=even_sum+i
    elif i%2==1:
        odd_sum=odd_sum+i
for j in second_list:
    if j%2==0:
        even_sum=even_sum+j
    elif j%2==1:
        odd_sum=odd_sum+j
print(even_sum)
print(odd_sum)
