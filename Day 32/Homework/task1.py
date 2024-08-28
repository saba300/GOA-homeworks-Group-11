'''Find The Parity Outlier'''

def find_outlier(integers):
    odd=0
    even=0
    x=0
    for i in integers:
        if i%2==0:
            even+=1
        else:
            odd+=1
    if even==1:
        for i in integers:
            if i%2==0:
                return i
    else:
        for i in integers:
            if i%2==1:
                return i