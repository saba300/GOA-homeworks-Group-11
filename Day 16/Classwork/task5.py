'''5) თქვენი დავალებაა წინა დავალებიდან ამოგდებული რიცხვები ჩაამატოთ ახალ სიაში'''

#4
my_list=[1, 2, 3, 4, 5]
mnm=min(my_list)
mxm=max(my_list)
my_list.remove(mnm)
my_list.remove(mxm)
print(my_list)

#5
my2_list=[]
my2_list.append(mnm)
my2_list.append(mxm)
print(my2_list)