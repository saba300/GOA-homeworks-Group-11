'''იგივე პრცნიპით შექმენით გაკვეთილების ცხრილი იყს 4 საგანი ყველა საგანს სხვადასხვა ქულა მიანიჭეთ და გამოთვალეთ მისი საშუალო '''

lesson_dict={
    "math":10,
    "physics":9,
    "chemistry":10,
    "biology":10
}
sum=0
num=0
for i in lesson_dict:
    sum=sum+lesson_dict[i]
    num=num+1
average=sum/num
print(average)