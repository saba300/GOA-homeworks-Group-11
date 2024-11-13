'''1) შევქმნათ 2D მასივი ბულეანიების და მასში True შევცვალოთ False-ით ხოლო False True-თი'''

arr=[
    [True, False, True],
    [False, False, True],
    [True, True, False, False]
]

for i in arr:
    for j in range(len(i)):
        if i[j]==True:
            i[j]=False
        else:
            i[j]=True

print(arr)