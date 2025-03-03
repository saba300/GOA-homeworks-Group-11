'''იპოვეთ ლისტში ყველაზე დიდი წევრი max ფუნქციის გამოყენების გარეშე.'''

my_list=[1, 2, 3, 4, -5]
max=my_list[0]
for i in my_list:
    if max<i:
        max=i
print(max)