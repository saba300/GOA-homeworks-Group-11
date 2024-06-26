'''შექმენით  max min და sum ფუნქციის კლონები სადაც კომენტარის სახით ახსნით თქვენს თითოეულ მოქმედებას'''
#max
numbers = [1,2,14,0,5,6,-8]

max_number = numbers[0]

for number in numbers:
    if max_number < number:
        max_number = number

print(max_number)

#min
numbers = [1,2,14,0,5,6,-8]

min_number = numbers[0]

for number in numbers:
    if min_number > number:
        min_number = number

print(min_number)

#sum
numbers = [1,2,14,0,5,6,-8]

sum_numbers = 0

for number in numbers:
    sum_numbers = sum_numbers + number