#https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/python
def reverse_number(n):
    if n < 0:
        return -int(str(n)[:0:-1])
    return int(str(n)[::-1])