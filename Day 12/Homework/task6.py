'''მომხმარებელს შემოატანინეთ 1 დან 7-ის ჩათვლით რომელიმე რიცხვი ამის შემდეგ კი გამოიყენეთ 
if elif else რომ შეუსაბამოდ კვირის დღე 1 ორშაბათისთვის 2 სამშაბათისთვის 3 ოთხშაბათისთვის და ასე შემდეგ'''
num = int(input("Choose number between 1 and 7: "))
if num==1:
    print("ორშაბათი")
elif num==2:
    print("სამშაბათი")
elif num==3:
    print("ოთხშაბათი")
elif num==4:
    print("ხუთშაბათი")
elif num==5:
    print("პარასკევი")
elif num==6:
    print("შაბათი")
else:
    print("კვირა")