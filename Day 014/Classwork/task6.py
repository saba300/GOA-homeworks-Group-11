'''მომხმარებელს შემოატნინეთ for ციკლის საშუალებით 5 სახელი რომელსაც შეინახავთ სიაში  
და შემდეგ დაითვალეთ თქვენს მიერ არჩეული სახელი რამდენჯერ მეორდება სიაში'''

names = []
total=0
for i in range(5):
    name=input("Enter name: ")
    names.append(name)
myname="saba"
for j in names:
    if myname==j:
        total=total+1
print(total)