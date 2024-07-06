'''შემოგდით სია სადაც არის მხოლოდ სტრინგები და თქვენ გევალებათ გაიგოთ
ყველა ამ ელემენტების სიგრძე შეიყვანოთ მეორე სიაში(იგივე თანმიმდევრობით).'''

str_list=["book", "computer", "house", "laptop"]
len_list=[]
for i in str_list:
    len_list.append(len(i))
print(len_list)