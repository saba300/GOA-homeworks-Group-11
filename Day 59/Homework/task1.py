#Find the odd int
def find_it(seq):
    cnt=0
    for i in seq:
        cnt=0
        for j in seq:
            if j==i:
                cnt=cnt+1
        if cnt%2==1:
            return i