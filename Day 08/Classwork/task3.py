'''მომხმარებელს შემოატანინეთ მისი ასაკი და ბიუჯეტი თუ ასაკი მეტია 18-ზე და ბიუჯეტი მეტია 75-ზე 
დაუბეჭდეთ "you can buy this product" წინააღმდეგ შემთხვევაში დაუბეჭდეთ "you cant buy this product"'''

age = int(input("Your age: "))
budget = int(input("Your budget: "))

if age > 18 and budget > 75:
    print("you can buy this product")
else:
    print("you cant buy this product")