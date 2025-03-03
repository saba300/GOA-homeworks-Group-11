'''6) შემგდით ორი სია სადაც არის მხოლოდ ინტეჯერბი. თქვენი დავალებაა იპოვოთ ამ ორივე სიის 
მინიმალური და მაქსიმალური წევრები და შემდეგ მახსიმალურებს გამოაკლოთ საპირისპირო მინიმალურები.
შემდეგ მიღებული შედეგი ჩაამატეთ ახალ სიაში და დაპრინტეთ.'''

my1_list=[1, 2, 3, 4, 5]
my2_list=[2, 3, 4, 5, 6]
result_list=[]
mnm_1=min(my1_list)
mxm_1=max(my1_list)
mnm_2=min(my2_list)
mxm_2=max(my2_list)
result1=mxm_1-mnm_2
result2=mxm_2-mnm_1
result_list.append(result1)
result_list.append(result2)
print(result_list)

