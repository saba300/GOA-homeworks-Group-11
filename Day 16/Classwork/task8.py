'''8) შემოგდით სია სადაც არის როგორც ინტეჯერები ისე სტრინგები. თქვენი დავალებაა 
რომ შეკრიბოთ ყველა ინტეჯერი და შეაერთოთ ყველა სტრინგი'''

my_list=[1, "this", 2, "is", 3, "car"]
sum=0
word=""
for i in my_list:
    if type(i)==int:
        sum=sum+i
    elif type(i)==str:
        word=word+i
print(sum)
print(word)