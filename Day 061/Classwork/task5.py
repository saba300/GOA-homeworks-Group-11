#https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/python
def length_of_sequence(arr,n):
    if arr.count(n) == 2:
        return arr.index(n, arr.index(n) + 1) - arr.index(n) + 1
    return 0
