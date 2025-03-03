'''იპოვეთ ლისტში ყველაზე პატარა წევრი min ფუნქციის გამოყენების გარეშე.'''

my_list=[1, 2, 3, 4, -5]
min=my_list[0]
for i in my_list:
    if min>i:
        min=i
print(min)