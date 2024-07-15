'''შექმენით ცარიელი dict {}

და 1000 key დაამატეთ სხვადასხვა სახელებით იყოს 
item_1
item_2 
და ასე შემდეგ 
მათ მიანიჭეთ ციფების მნიშვნელობა 
'''

empty_dict={}
for i in range(1000):
    empty_dict[f"item_{i}"]=i
print(empty_dict)