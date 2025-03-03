'''Shortest Word'''

def find_short(s):
    s=s.split()
    min=len(s[0])
    for i in s:
        if min>len(i):
            min=len(i)
    return min