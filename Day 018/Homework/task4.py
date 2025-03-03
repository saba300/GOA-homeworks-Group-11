'''შექმენით input და dict ების გამოყენებით პატარა shopping card project სადაც მომხმარებელი თვითონვე აირჩევს რამდენი ნივთის ყიდვა უნდა  
და რა უნდა რომ იყიდოს საბოლოოდ კი ეს ინფორმაცია ცარიელ dict ში დაამატეთ და დაპრინტეთ'''

num=int(input("How many products do you want to buy? "))
product_dict={}
for i in range(1, num+1):
    product_dict[i]=input("Which product do you want? ")
print(product_dict)