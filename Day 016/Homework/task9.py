'''შემოგდით რამდენიმე სია (სტრინგებიც და ინტეჯერებიც) თქვენი დავალებაა ყველა ინტეჯერი შეკრიბოთ და ყველა სტრინგი შეაერთოთ.'''

my_list=[3, 6, 7, "I", "am", "16", "yearsold"]
sum=0
word=""
for i in my_list:
    if type(i)==int:
        sum=sum+i
    elif type(i)==str:
        word=word+i
print(sum)
print(word)