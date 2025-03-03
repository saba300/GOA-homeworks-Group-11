'''მომხმარებელს ჯერ შემოატანინეთ ბიუჯეტი, შემდეგ კი ის თანხა, 
რომელიც სასურველი ნივთის საყიდლად სჭირდება. დაბეჭდეთ შეუძლია ყიდვა თუ არა.'''

budget = int(input("Enter your budget: "))
price = int(input("Price: "))
if budget>=price:
    print("You can buy it")
else:
    print("You can`t buy it")