'''შექმენთ dict თქვენს თავზე გამოიყენეთ
name 
age

და დაამატეთ 2 მეთოდით email, surname
update()
dict_name["surname"] = "grdzelishvili" '''

about_me={
    "name" : "saba",
    "age" : 16
}

about_me.update({"email" : "sabajanana@gmail.com"})
about_me["surname"]="jananashvili"
print(about_me)