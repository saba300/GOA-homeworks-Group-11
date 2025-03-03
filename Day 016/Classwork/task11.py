'''შექმენით სტრინგი რომელსაც შემოატრიალებთ for ციკლის და სლაისინგის საშვალებით მეშვეობით'''

# with for loop
my_string="string"
reversed_string=""
for i in range(len(my_string)-1, -1, -1):
    reversed_string=reversed_string+my_string[i]
print(reversed_string)

#with slicing
my_string="string"
reversed_string=""
reversed_string=my_string[::-1]
print(reversed_string)