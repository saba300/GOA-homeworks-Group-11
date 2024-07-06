'''შემოგდით სია სადაც არის სტრინგები და ინტეჯერები. 
თქვენი დავალებაა ამ სიიდან ამოიღოთ თოეული წევრი და 
ინტეჯერები მოატავსოთ ცალკე სიაში ხოლო სტრინგები ცალკე სიაში.'''

my_list=[1, 2, 3, "one", "two", "three"]
int_list=[]
str_list=[]
for i in my_list:
    if type(i)==int:
        int_list.append(i)
    elif type(i)==str:
        str_list.append(i)
print(int_list)
print(str_list)
