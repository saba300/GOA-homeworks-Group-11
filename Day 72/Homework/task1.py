'''1) https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/python'''

def longest_palindrome (s):
    word=""
    i=0
    length=0
    while(i<len(s)):
        word=""
        for j in range(i, len(s)):
            word=word+s[j]
            if word==word[::-1]:
                if length<len(word):
                    length=len(word)
        i=i+1
    
    return length